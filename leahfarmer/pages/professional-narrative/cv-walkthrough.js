import Head from 'next/head'
import styles from '../../styles/Narrative.module.css'

export default function CvWalkthrough() {
  return (
    <>
      <Head>
        <title>The CV Walkthrough — The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="Going through your career one role at a time, looking for what you were proudest of, what you would not repeat, and what transfers." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative/cv-walkthrough" />
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
            <p className={styles.eyebrow}>Step two</p>
            <h1 className={styles.pageTitle}>
              The <em>CV walkthrough</em>
            </h1>
            <p className={styles.heroLede}>
              We go through your career one role at a time, oldest first. This is not me
              reading your CV back to you. It is a different set of questions, and they tend to
              surface things you had stopped noticing about your own career.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>The questions</h2>
            <p className={styles.stepBody} style={{ marginBottom: '1.5rem' }}>
              For every role, the same four:
            </p>
            <ul className={styles.dashList}>
              <li><strong>What was the role?</strong> Briefly. Enough context that we both know what we are talking about.</li>
              <li><strong>What are you proudest of?</strong> Not what was most impressive on paper. What you are actually proud of.</li>
              <li><strong>What are your deal breakers?</strong> What came out of that job that you will not do again.</li>
              <li><strong>What did you take with you?</strong> The thing you learned that still shapes how you work.</li>
            </ul>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                Depending on where you are heading, I will add a fifth lens and read every role
                through it. For someone moving into product, that is the product thinking you
                were doing without the title. For someone moving into leadership, it is the
                leadership you were already doing before anyone called it that.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What to bring</h2>
            <div className={styles.prose}>
              <p>
                Your CV, or your LinkedIn profile if that is more current. It does not need to
                be tidy. We are not editing it. It is a map so we know which stop we are at.
              </p>
              <p>
                Come with time rather than preparation. How long this takes depends entirely on
                how long your career is and where you want to stop and dig. One session for
                some people, two or three for others. The rabbit holes are usually the valuable
                part, so I do not rush them.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What comes out of it</h2>
            <div className={styles.prose}>
              <p>
                I take notes throughout and write them up afterward. You get a document with
                your roles and what you said about each one, and above that, the themes.
              </p>
              <p>
                The themes are the point. Patterns you cannot see from inside your own career
                because you lived it one job at a time. The inflection where you stopped being
                a craftsperson and started being a systems thinker. The thing you have been
                doing in every role regardless of what the title said. The deal breaker that
                turns out to be the same deal breaker four times over.
              </p>
              <p className={styles.proseEmphasis}>
                This is also where your interview stories come from. We do not go looking for
                them later. They are already here, in what you were proudest of.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <div className={styles.outputBox}>
              <p className={styles.outputLabel}>What you walk away with</p>
              <p className={styles.outputBody}>
                A written document with the themes from your career and detailed notes on every
                role. It feeds the "What I have done" section of your narrative, and it is the
                source material for your story map at the end.
              </p>
            </div>

            <div className={styles.pager} style={{ marginTop: '3rem' }}>
              <a href="/professional-narrative/working-genius" className={styles.pagerLink}>← Working Genius</a>
              <a href="/professional-narrative/values" className={styles.pagerLink}>Next: the values exercise →</a>
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
