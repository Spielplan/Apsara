import { useForm, ValidationError } from '@formspree/react'
import { useI18n } from '../i18n/useI18n'

// IMPORTANT: Replace 'YOUR_FORM_ID' with the actual Formspree form ID
// obtained from https://formspree.io/forms after creating a form.
// Example ID format: 'xrgvkqzl'
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'

function ContactPage() {
  const { t } = useI18n()
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Contact</p>
        <h1>{t('pages.contact.title')}</h1>
        <p className="lead">{t('pages.contact.lead')}</p>
      </section>

      <section className="content-section">
        {state.succeeded ? (
          <p className="form-status">Thanks. Your message has been sent to Apsara.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" required />
              <ValidationError field="name" prefix="Name" errors={state.errors} />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
            </label>
            <label>
              Company
              <input name="company" type="text" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
              <ValidationError field="message" prefix="Message" errors={state.errors} />
            </label>
            <button type="submit" className="button button-primary" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </section>
    </>
  )
}

export default ContactPage
