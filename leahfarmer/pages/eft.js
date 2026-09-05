import Head from 'next/head'
import Script from 'next/script'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Eft.module.css'

const CALENDLY_EFT = 'https://calendly.com/lfcoaching/eft-tapping-60mins'
// TODO: replace with the real Meetup group URL
const MEETUP_URL = 'https://www.meetup.com/the-reset-room/'

export default function Eft() {
  return (
    <>
      <Head>
        <title>EFT Tapping Sessions at Half Price — Leah Farmer</title>
        <meta name="description" content="Private one-to-one EFT tapping sessions at £40, half my standard rate, while I complete my final certification hours. Online, worldwide. Limited slots." />
        <link rel="canonical" href="https://www.leahfarmer.com/eft" />
        <meta property="og:title" content="EFT Tapping Sessions at Half Price — Leah Farmer" />
        <meta property="og:description" content="Private EFT tapping sessions at £40 while I complete my final certification case study hours." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/eft" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EFT Tapping Sessions at Half Price — Leah Farmer" />
        <meta name="twitter:description" content="Private EFT tapping sessions at £40 while I complete my final certification case study hours." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/headshot.png" />
      </Head>

      <Nav />

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <div className={styles.pageHeroRow}>
              <div>
                <p className={styles.eyebrow}>Limited availability</p>
                <h1 className={styles.pageTitle}>
                  Private EFT tapping sessions,<br /><em>half the standard rate</em>
                </h1>
              </div>
              <a href="#book" className={styles.heroCtaRound}>
                Book a<br />session
              </a>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Why this is half price</h2>
            <div className={styles.prose}>
              <p>
                I am completing the final certification hours for my advanced EFT training.
                You get the full session at half price. I get the case study hours. That is
                the whole trade.
              </p>
              <p>
                I am a qualified practitioner working through the final tier of certification,
                which requires a set number of documented case study hours. Rather than pad
                that out with free sessions, I am opening a limited number of paid slots at
                half my standard rate.
              </p>
              <p>
                You get a full, private, one-to-one session. Nothing about the session itself
                is reduced. The only things that change are the price and the fact that your
                session counts toward my hours.
              </p>
              <p className={styles.proseEmphasis}>
                When the hours are complete, the rate goes back to standard.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT EFT IS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What EFT actually is</h2>
            <div className={styles.prose} style={{ marginBottom: '1.75rem' }}>
              <p>
                EFT, often called tapping, combines gentle tapping on acupressure points with
                focused attention on whatever is stuck. It sounds odd until you have done it.
                Then you tend to wonder why nobody mentioned it sooner.
              </p>
              <p>
                It works directly on the stress response, which is why people often feel a
                shift inside a single session rather than after weeks of talking around
                something.
              </p>
              <p>People usually bring me one of these:</p>
            </div>
            <ul className={styles.dashList}>
              <li>Anxiety that shows up in the body, not just the head</li>
              <li>Dread before a specific thing: a conversation, a presentation, a return to work</li>
              <li>The tight, wired exhaustion that comes with burnout</li>
              <li>A block around asking, charging, or putting themselves forward</li>
              <li>A pattern they can name clearly and still cannot shift</li>
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Session pricing</h2>
            <div className={styles.priceBlock}>
              <span className={styles.priceWas}>£85</span>
              <span className={styles.priceAmount}>£40</span>
              <span className={styles.priceNote}>per 60 minute session</span>
            </div>
            <p className={styles.priceDetail}>
              Sessions are priced in pounds, and I accept international cards. Your exchange
              rate is calculated at the time of payment, so expect roughly $55 or €45
              depending on the rate that day. Sessions are online, so time zone is not a
              problem. Book them one at a time. No packages, no commitment.
            </p>
          </div>
        </section>

        {/* GROUP SESSIONS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Rather try it in a group first?</h2>
            <div className={styles.prose} style={{ marginBottom: '1.5rem' }}>
              <p>
                I run online group tapping sessions through The Reset Room. Same technique,
                guided the same way, £10 a drop in. Cameras off is normal and nobody is asked
                to speak or share anything out loud.
              </p>
              <p>
                It is a low-stakes way to find out whether this does anything for you before
                booking a private session.
              </p>
            </div>
            <p className={styles.bookingNote} style={{ marginTop: 0 }}>
              <a href={MEETUP_URL} target="_blank" rel="noopener">
                See upcoming sessions on Meetup
              </a>
            </p>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What to expect</h2>
            <div className={styles.expectGrid}>

              <div className={styles.expectCard}>
                <h3 className={styles.expectTitle}>Before</h3>
                <p className={styles.expectBody}>
                  You book and pay in one step. I send a short form asking what you want to
                  work on. You do not need to have it neatly figured out. A rough description
                  is plenty.
                </p>
              </div>

              <div className={styles.expectCard}>
                <h3 className={styles.expectTitle}>During</h3>
                <p className={styles.expectBody}>
                  Sixty minutes on video. We talk for the first ten or so, find the specific
                  thing worth working on, then tap together. I guide it. You follow along.
                  Nothing to prepare, nothing to learn first.
                </p>
              </div>

              <div className={styles.expectCard}>
                <h3 className={styles.expectTitle}>After</h3>
                <p className={styles.expectBody}>
                  I send you the tapping sequence we used so you can repeat it on your own.
                  Most people find the effect holds better when they use it a few times in the
                  following week.
                </p>
              </div>

              <div className={styles.expectCard}>
                <h3 className={styles.expectTitle}>The case study part</h3>
                <p className={styles.expectBody}>
                  I write up the session for my certification. It is anonymized, you are never
                  named, and it is not published anywhere. I will ask you to confirm you are
                  comfortable with this when you book.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className={styles.section} id="book">
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Book a session</h2>
            <div className={styles.calendlyWrap}>
              <div
                className={`calendly-inline-widget ${styles.calendlyEmbed}`}
                data-url={`${CALENDLY_EFT}?hide_gdpr_banner=1&background_color=00001a&text_color=ffffff&primary_color=0eb2cd`}
              />
            </div>
            <p className={styles.bookingNote}>
              Calendar not loading? Book directly at{' '}
              <a href={CALENDLY_EFT} target="_blank" rel="noopener">calendly.com/lfcoaching/eft-tapping-60mins</a>.
              Prefer to ask something first? Email{' '}
              <a href="mailto:leah@leahfarmer.com">leah@leahfarmer.com</a>.
            </p>
          </div>
        </section>

        {/* SMALL PRINT */}
        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <p className={styles.smallPrint}>
              EFT is a complementary self-help technique. It is not therapy and it is not
              medical treatment. It works well alongside professional care and it is not a
              substitute for it. If you are in crisis, or working with trauma that needs
              clinical support, please speak with your doctor or a licensed therapist first.
              I am happy to talk through whether this is a good fit before you book.
            </p>
          </div>
        </section>

      </main>

      <Footer />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
