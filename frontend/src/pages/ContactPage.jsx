import { useState } from 'react'
import { useI18n } from '../i18n/useI18n'

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function ContactPage() {
  const { t } = useI18n()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Unable to submit')
      }

      setForm(initialForm)
      setStatus('Thanks. Your message has been sent to Apsara.')
    } catch {
      setStatus('Unable to submit right now. Please try again shortly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Contact</p>
        <h1>{t('pages.contact.title')}</h1>
        <p className="lead">{t('pages.contact.lead')}</p>
      </section>

      <section className="content-section">
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Company
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={onChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={onChange}
              required
            />
          </label>
          <button type="submit" className="button button-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send message'}
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </section>
    </>
  )
}

export default ContactPage
