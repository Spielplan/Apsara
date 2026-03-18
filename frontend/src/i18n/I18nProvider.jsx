import { useEffect, useMemo, useState } from 'react'
import { I18nContext } from './context'
import { messages, RTL_LANGS } from './messages'

const getNested = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj)

const getDefaultLang = () => {
  const candidate = navigator.language?.split('-')[0] ?? 'en'
  return messages[candidate] ? candidate : 'en'
}

function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('apsara.language')
      if (saved && messages[saved]) {
        return saved
      }
    } catch {
      // Ignore local storage access issues and fall back.
    }

    return getDefaultLang()
  })

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = RTL_LANGS.has(language) ? 'rtl' : 'ltr'
  }, [language])

  useEffect(() => {
    try {
      localStorage.setItem('apsara.language', language)
    } catch {
      // Ignore local storage access issues.
    }
  }, [language])

  const value = useMemo(() => {
    const t = (key) => {
      const localized = getNested(messages[language], key)
      if (localized !== undefined) {
        return localized
      }

      const english = getNested(messages.en, key)
      return english !== undefined ? english : key
    }

    return { language, setLanguage, t }
  }, [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export default I18nProvider
