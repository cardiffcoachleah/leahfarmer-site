import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Intake.module.css'
import { useForm, ValidationError } from '@formspree/react'

const AREAS = [
  'Career growth & leadership',
  'Managing teams & people',
  'Navigating change or transition',
  'Burnout, stress & sustainability',
  'Confidence & imposter syndrome',
  'Craft & technical leadership',
  'Building & shipping',
  'Personal development',
  'Other',
]

export default function Intake() {
  const [state, handleSubmit] = useForm('xpqnrwvk')

  if (state.succeeded) {
    return (
      <>
        <Nav />
        <main className={styles.main}>
          <div className={styles.success}>
            <h1 className={styles.successTitle}>You're all set.</h1>
            <p className={styles.successBody}>Thank you for taking the time to fill this in. I'll read through your answers before we meet — it makes our first session so much more useful. See you soon.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Coaching Intake — Leah Farmer</title>
        <meta name="description" content="Coaching intake form for new clients of Leah Farmer." />
      </Head>
      <Nav />

      <main className={styles.main}>
        <div className={styles.formWrap}>

          <div className={styles.formHeader}>
            <p className={styles.eyebrow}>Before we begin</p>
            <h1 className={styles.formTitle}>Coaching Intake Form</h1>
            <p className={styles.formIntro}>Take your time with this. There are no right or wrong answers — I'm not looking for anything specific. These questions are here to help you think, and to help me show up better for you from day one. Everything you share stays between us.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>

            {/* BILLING INFO */}
            <div className={styles.fieldGroup}>
              <p className={styles.groupLabel}>About you</p>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Full name <span className={styles.required}>*</span></label>
                  <input className={styles.input} id="name" type="text" name="name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email address <span className={styles.required}>*</span></label>
                  <input className={styles.input} id="email" type="email" name="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">Phone number</label>
                  <input className={styles.input} id="phone" type="tel" name="phone" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="location">City, country & postal code <span className={styles.required}>*</span><span className={styles.hint}> — required for billing</span></label>
                  <input className={styles.input} id="location" type="text" name="location" required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="role">Current role and where you work <span className={styles.required}>*</span></label>
                <input className={styles.input} id="role" type="text" name="role" placeholder="e.g. Senior PM at Acme, or Founder of a seed-stage startup" required />
              </div>
            </div>

            <div className={styles.divider} />

            {/* COACHING CONTEXT */}
            <div className={styles.fieldGroup}>
              <p className={styles.groupLabel}>What's going on</p>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="bringing">What's bringing you to coaching right now? <span className={styles.required}>*</span></label>
                <p className={styles.fieldHint}>No need to have it all figured out. Just tell me what's on your mind.</p>
                <textarea className={styles.textarea} id="bringing" name="bringing" rows={5} required />
                <ValidationError prefix="bringing" field="bringing" errors={state.errors} className={styles.error} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>What areas do you want to focus on? <span className={styles.required}>*</span></label>
                <p className={styles.fieldHint}>Select as many as you want.</p>
                <div className={styles.checkboxGrid}>
                  {AREAS.map(area => (
                    <label key={area} className={styles.checkboxLabel}>
                      <input type="checkbox" name="areas" value={area} className={styles.checkbox} />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            {/* GOALS */}
            <div className={styles.fieldGroup}>
              <p className={styles.groupLabel}>Where you're headed</p>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="goals12">What does success look like for you in the next 12 months? <span className={styles.required}>*</span></label>
                <textarea className={styles.textarea} id="goals12" name="goals12" rows={4} required />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="goals35">Where do you want to be in 3–5 years?</label>
                <p className={styles.fieldHint}>If you know. It's fine if you don't.</p>
                <textarea className={styles.textarea} id="goals35" name="goals35" rows={4} />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="obstacles">What's getting in the way of where you want to be?</label>
                <textarea className={styles.textarea} id="obstacles" name="obstacles" rows={4} />
              </div>
            </div>

            <div className={styles.divider} />

            {/* SELF AWARENESS */}
            <div className={styles.fieldGroup}>
              <p className={styles.groupLabel}>You, honestly</p>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="strengths">What are you bringing to this? What do you consider your strengths?</label>
                <textarea className={styles.textarea} id="strengths" name="strengths" rows={4} />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="growth">Where do you most want to grow?</label>
                <textarea className={styles.textarea} id="growth" name="growth" rows={4} />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="expectations">What do you want from a coach? <span className={styles.required}>*</span></label>
                <textarea className={styles.textarea} id="expectations" name="expectations" rows={4} required />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="nofail">If you knew you couldn't fail, what would you do?</label>
                <textarea className={styles.textarea} id="nofail" name="nofail" rows={4} />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="anything">Is there anything else you want me to know before we get started?</label>
                <textarea className={styles.textarea} id="anything" name="anything" rows={4} />
              </div>
            </div>

            <div className={styles.submitRow}>
              <button type="submit" disabled={state.submitting} className={styles.submitBtn}>
                {state.submitting ? 'Sending...' : 'Submit intake form →'}
              </button>
            </div>

          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
