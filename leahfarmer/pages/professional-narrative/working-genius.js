import Head from 'next/head'
import styles from '../../styles/Narrative.module.css'

export default function WorkingGenius() {
  return (
    <>
      <Head>
        <title>Working Genius — The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="The first step of the professional narrative: where your energy actually goes, and the problem you are trying to solve." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative/working-genius" />
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
            <p className={styles.eyebrow}>Step one</p>
            <h1 className={styles.pageTitle}>
              Working Genius and your <em>problem statement</em>
            </h1>
            <p className={styles.heroLede}>
              Before we look at what you have done, we look at where your energy goes. Most
              career frustration is not a skills problem. It is spending too much time doing
              work that drains you, whether or not you are good at it.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What Working Genius is</h2>
            <div className={styles.prose}>
              <p>
                The Six Types of Working Genius is an assessment from Patrick Lencioni and the
                Table Group. It sorts six kinds of work into three buckets for you: the two
                that give you energy, the two you are competent at, and the two that cost you
                energy every time you do them.
              </p>
              <p>
                The six are Wonder, Invention, Discernment, Galvanizing, Enablement, and
                Tenacity. Every project needs all six, in roughly that order. Nobody has all
                six.
              </p>
              <p className={styles.proseEmphasis}>
                The useful part is not the two you are good at. It is the two that drain you,
                and the honest look at how much of your week is currently spent there.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What we do</h2>
            <ul className={styles.dashList}>
              <li>You take the assessment. It costs around twenty five dollars and takes about ten minutes. You get a report straight from the Table Group.</li>
              <li>I am a certified facilitator, so I take your results and build you a readout that goes further than the standard report and speaks to your situation rather than a generic one.</li>
              <li>We spend the session going through it. What lights you up, what you are capable of but should not live in, and what you need to stop carrying alone.</li>
              <li>Then we name your problem statement. What are you actually trying to solve? Getting unstuck, changing direction, moving into product, getting out of a role that is grinding you down.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Why the problem statement matters</h2>
            <div className={styles.prose}>
              <p>
                People arrive at this work from very different places. One person is job
                hunting. Another cannot say why they feel stuck. Another is an engineer who has
                been doing product work for a decade without the title.
              </p>
              <p>
                Naming it on day one gives us something to keep checking against. It is the
                thread that runs through the CV walkthrough, the 5 Ps, and the narrative
                itself. Without it, the exercise becomes an interesting look back at your
                career that does not point anywhere.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <div className={styles.outputBox}>
              <p className={styles.outputLabel}>What you walk away with</p>
              <p className={styles.outputBody}>
                Your Working Genius report, a personalized readout you can keep, and a written
                problem statement in your own words.
              </p>
            </div>

            <div className={styles.pager} style={{ marginTop: '3rem' }}>
              <a href="/professional-narrative" className={styles.pagerLink}>← Overview</a>
              <a href="/professional-narrative/cv-walkthrough" className={styles.pagerLink}>Next: the CV walkthrough →</a>
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
