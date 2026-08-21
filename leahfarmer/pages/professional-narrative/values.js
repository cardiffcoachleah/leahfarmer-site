import Head from 'next/head'
import styles from '../../styles/Narrative.module.css'

export default function ValuesStep() {
  return (
    <>
      <Head>
        <title>The Values Exercise — The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="Naming the three to five values you actually work and live by, and where they came from." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative/values" />
      </Head>

      <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label="Leah Farmer Coaching and Advisory, back to homepage">
          <img src="/logo.png" alt="Leah Farmer Coaching &amp; Advisory" className={styles.logoImg} />
        </a>
      </header>

      <main className={styles.main}>

        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <a href="/professional-narrative" className={styles.backLink}>← The Professional Narrative</a>
            <p className={styles.eyebrow}>Step three</p>
            <h1 className={styles.pageTitle}>
              The <em>values exercise</em>
            </h1>
            <p className={styles.heroLede}>
              One of the three questions your narrative answers is what you value. This is how
              you answer it. Not with the words a company puts on a wall, but with the three to
              five you would not trade away.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Why this one matters</h2>
            <div className={styles.prose}>
              <p>
                Most people can talk fluently about what they have done and roughly about what
                they want. The middle section is where narratives go vague, because saying what
                you value out loud feels either obvious or grandiose.
              </p>
              <p>
                It is also the section that does the most work later. Your values are what turn
                a deal breaker from a complaint into a principle. They are what you reach for
                when an interviewer asks why you left, or what kind of culture you need, or how
                you handle disagreement.
              </p>
              <p className={styles.proseEmphasis}>
                Without this step, "What I value" ends up as three adjectives anyone could have
                written. With it, you have language you actually chose.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How it works</h2>
            <ul className={styles.dashList}>
              <li><strong>First pass.</strong> You go through a long list of words and click anything that stands out. No filtering, no thinking hard. Then you walk away for at least an hour.</li>
              <li><strong>Second pass.</strong> You come back and start cutting. Where two words are saying the same thing, you keep the one that sounds more like you. Then you walk away again.</li>
              <li><strong>Third pass and beyond.</strong> You narrow to three to five and mark them final.</li>
            </ul>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                Doing it over a few days rather than in one sitting is the whole design. The
                words you still want on Thursday are the real ones. The ones that felt important
                on Monday and quietly dropped off are worth noticing too.
              </p>
              <p>
                If you cannot get to five, do not worry about it. Bring me whatever you have.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Do it here</h2>
            <div className={styles.prose} style={{ marginBottom: '1.75rem' }}>
              <p>
                The exercise is a page on this site. Your selections save in your browser as you
                click, so you can close it and come back to it tomorrow. Nothing leaves your
                device until you choose to send it to me.
              </p>
            </div>
            <a href="/values" className={styles.button}>
              Start the values exercise
            </a>
            <p className={styles.ctaNote}>
              When you are done, save it as a PDF or send it over, and I will add it to your
              file alongside everything else.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Then we talk about it</h2>
            <div className={styles.prose}>
              <p>
                The list is the start, not the finish. In session we go looking for where each
                one came from. A value you cannot attach to a story is usually a word you think
                you should want.
              </p>
              <p>
                Your CV walkthrough is useful here. The deal breakers you named are often the
                fastest route to your values, because you tend to walk away from a job at
                exactly the point where something you care about is being trampled.
              </p>
              <p>
                This also feeds straight into the Purpose conversation in the 5 Ps, so the two
                sit next to each other on purpose.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <div className={styles.outputBox}>
              <p className={styles.outputLabel}>What you walk away with</p>
              <p className={styles.outputBody}>
                Three to five values in your own words, with a story attached to each one. This
                is the raw material for the "What I value" section of your narrative.
              </p>
            </div>

            <div className={styles.pager} style={{ marginTop: '3rem' }}>
              <a href="/professional-narrative/cv-walkthrough" className={styles.pagerLink}>← The CV walkthrough</a>
              <a href="/professional-narrative/five-ps" className={styles.pagerLink}>Next: the 5 Ps →</a>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            © Leah Farmer · Cardiff, Wales · <a href="/">leahfarmer.com</a> ·{' '}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </footer>

      </main>
    </>
  )
}
