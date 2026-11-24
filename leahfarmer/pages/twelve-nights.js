import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/TwelveNights.module.css'

// Mailchimp form details (from the "Twelve Nights guide" embedded form)
const MC_ENDPOINT = 'https://leahfarmer.us21.list-manage.com/subscribe/post-json'
const MC_PARAMS = {
  u: 'c27f5bf59f05f1dcc6f39e2d4',
  id: 'f1244baa34',
  f_id: '0026a9e6f0',
  tags: '3452040',
}
const MC_HONEYPOT = 'b_c27f5bf59f05f1dcc6f39e2d4_f1244baa34'
const GDPR_EMAIL = 'gdpr[1565]'
const GDPR_NEWSLETTER = 'gdpr[1566]'

const STEPS = [
  {
    num: '1',
    title: 'Gather',
    when: 'Nov 30 to Dec 21',
    body: 'Four weeks of prompts across twelve areas of your life. No wishes yet. Just notice what you want.',
  },
  {
    num: '2',
    title: 'Write',
    when: 'Christmas Eve',
    body: 'Turn what you gathered into thirteen wishes on thirteen slips of paper.',
  },
  {
    num: '3',
    title: 'Release',
    when: 'Dec 25 to Jan 5',
    body: 'Each night, draw one slip without reading it and set it free. The universe takes those twelve.',
  },
  {
    num: '13',
    title: 'Keep',
    when: 'Jan 5',
    body: 'The last slip is the only one you read. That wish is yours to make happen.',
    highlight: true,
  },
]

function subscribe(fields) {
  return new Promise((resolve, reject) => {
    const callback = `mcCallback_${Date.now()}`
    const params = new URLSearchParams({ ...MC_PARAMS, ...fields, c: callback })
    const script = document.createElement('script')
    const timer = setTimeout(() => {
      cleanup()
      reject(new Error('timeout'))
    }, 15000)

    function cleanup() {
      clearTimeout(timer)
      delete window[callback]
      script.remove()
    }

    window[callback] = (data) => {
      cleanup()
      resolve(data)
    }
    script.onerror = () => {
      cleanup()
      reject(new Error('network'))
    }
    script.src = `${MC_ENDPOINT}?${params.toString()}`
    document.body.appendChild(script)
  })
}

function cleanMessage(msg) {
  if (!msg) return ''
  return String(msg).replace(/<[^>]*>/g, '').replace(/^\d+\s*-\s*/, '').trim()
}

export default function TwelveNights() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [permEmail, setPermEmail] = useState(false)
  const [permNewsletter, setPermNewsletter] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (honeypot) return
    setStatus('sending')
    setMessage('')

    const fields = { EMAIL: email.trim(), FNAME: firstName.trim(), [MC_HONEYPOT]: '' }
    if (permEmail) fields[GDPR_EMAIL] = 'Y'
    if (permNewsletter) fields[GDPR_NEWSLETTER] = 'Y'

    try {
      const data = await subscribe(fields)
      if (data && data.result === 'success') {
        setStatus('success')
      } else {
        const text = cleanMessage(data && data.msg)
        if (/already subscribed/i.test(text)) {
          setStatus('success')
          setMessage('already')
        } else {
          setStatus('error')
          setMessage(text || 'Something went wrong. Please try again.')
        }
      }
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again, or email leah@leahfarmer.com and I will send it to you.')
    }
  }

  return (
    <>
      <Head>
        <title>Twelve nights, thirteen wishes | Leah Farmer</title>
        <meta name="description" content="A free winter ritual for dreaming up the year ahead. Four weeks of prompts, thirteen wishes, and twelve nights to let them go." />
        <link rel="canonical" href="https://www.leahfarmer.com/twelve-nights" />
        <meta property="og:title" content="Twelve nights, thirteen wishes" />
        <meta property="og:description" content="A free winter ritual for dreaming up the year ahead." />
        <meta property="og:image" content="https://www.leahfarmer.com/LFCA%20Logo%20Only.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/twelve-nights" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Twelve nights, thirteen wishes" />
        <meta name="twitter:description" content="A free winter ritual for dreaming up the year ahead." />
      </Head>

      <Nav />

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>A free winter ritual</p>
            <h1 className={styles.title}>Twelve nights,<br />thirteen wishes</h1>
            <p className={styles.tagline}>Dream it now. Release it in the dark. Keep one for yourself.</p>
            <a href="#get-the-guide" className={styles.heroButton}>Get the guide</a>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.prose}>
              <p>
                This time of year, everyone wants a plan from you. Goals. Budgets. Roadmaps
                for next year. This is something different.
              </p>
              <p>
                Between Christmas and the first week of January there&apos;s a stretch of time
                that doesn&apos;t quite belong to either year. In Alpine and Germanic folk
                tradition these are the Rauhn&auml;chte, the rough or smoky nights. People
                rested, watched their dreams, and let the old year go.
              </p>
              <p>
                I&apos;ve built a small ritual around those nights. Not a goals spreadsheet.
                Wishes. The kind you&apos;d be a little shy to say out loud.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>How it works</p>
            <h2 className={styles.sectionTitle}>Four steps, six weeks</h2>
            <div className={styles.steps}>
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className={step.highlight ? `${styles.step} ${styles.stepHighlight}` : styles.step}
                >
                  <span className={styles.stepNum}>{step.num}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepWhen}>{step.when}</p>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className={styles.sectionLast} id="get-the-guide">
          <div className={styles.sectionInner}>
            <div className={styles.formCard}>
              {status === 'success' ? (
                <div className={styles.success} role="status">
                  <h2 className={styles.formTitle}>It&apos;s on its way</h2>
                  {message === 'already' ? (
                    <p>
                      You&apos;re already on my list, so the guide is on its way to your inbox.
                      If it doesn&apos;t arrive in a few minutes, email me at{' '}
                      <a href="mailto:leah@leahfarmer.com">leah@leahfarmer.com</a> and I&apos;ll send it over.
                    </p>
                  ) : (
                    <p>
                      Check your inbox (and your promotions folder, just in case). The prompts
                      start Monday, November 30, so you have time to find yourself a notebook.
                    </p>
                  )}
                  <p className={styles.signoff}>xx, Leah</p>
                </div>
              ) : (
                <>
                  <h2 className={styles.formTitle}>Get your free guide</h2>
                  <p className={styles.formIntro}>
                    A five-page printable PDF with all the prompts and the ritual, sent straight
                    to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className={styles.form} noValidate={false}>
                    <div className={styles.field}>
                      <label htmlFor="tn-fname">First name</label>
                      <input
                        id="tn-fname"
                        type="text"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="tn-email">Email address <span className={styles.required}>*</span></label>
                      <input
                        id="tn-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <fieldset className={styles.permissions}>
                      <legend>How would you like to hear from me?</legend>
                      <p className={styles.permNote}>
                        Tick Newsletter to get my seasonal letters, too.
                      </p>
                      <label className={styles.checkbox}>
                        <input
                          type="checkbox"
                          checked={permNewsletter}
                          onChange={(e) => setPermNewsletter(e.target.checked)}
                        />
                        <span>Newsletter</span>
                      </label>
                      <label className={styles.checkbox}>
                        <input
                          type="checkbox"
                          checked={permEmail}
                          onChange={(e) => setPermEmail(e.target.checked)}
                        />
                        <span>Email (the occasional update)</span>
                      </label>
                    </fieldset>

                    {/* Spam trap: real people never see or fill this */}
                    <div className={styles.honeypot} aria-hidden="true">
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending...' : 'Send me the guide'}
                    </button>

                    {status === 'error' && (
                      <p className={styles.error} role="alert">{message}</p>
                    )}

                    <p className={styles.legal}>
                      You can unsubscribe any time using the link at the bottom of every email.
                      I use Mailchimp to send my emails, so your details are processed by
                      Mailchimp. <a href="/privacy">Privacy policy</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
