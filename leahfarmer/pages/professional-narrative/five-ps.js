import Head from 'next/head'
import styles from '../../styles/Narrative.module.css'

const PS = [
  ['Purpose', 'Whether the work means something to you, and whether that lines up with what you actually believe.'],
  ['People', 'Who you need around you. What you need from the person you report to. What good looks like when it is working.'],
  ['Passion', 'The work that makes you lose track of time. What you would spend your week on if you got to choose.'],
  ['Progression', 'Where you are going. Whether your current path excites you or feels closed off.'],
  ['Pay', 'What fair means to you, and where money sits against everything else right now.']
]

export default function FivePs() {
  return (
    <>
      <Head>
        <title>The 5 Ps — The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="Purpose, People, Passion, Progression, Pay. Five things a job has to give you, and which ones you can live without right now." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative/five-ps" />
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
            <p className={styles.eyebrow}>Step four</p>
            <h1 className={styles.pageTitle}>
              The <em>5 Ps</em>
            </h1>
            <p className={styles.heroLede}>
              Five things a job has to give you. Most roles deliver on some and not others, and
              which ones you can live without changes over the course of a career. Knowing which
              is which is how you stop evaluating jobs on instinct alone.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>The five</h2>
            <div className={styles.steps}>
              {PS.map(([name, body]) => (
                <div key={name} className={styles.step}>
                  <div className={styles.stepNum}>{name.charAt(0)}</div>
                  <div>
                    <h3 className={styles.stepTitle}>{name}</h3>
                    <p className={styles.stepBody}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How the session goes</h2>
            <div className={styles.prose}>
              <p>
                We start at Purpose and work through all five. I have a set of open questions
                for each one, but I follow your energy rather than the list. If we spend forty
                minutes on People because that is where the real thing is, that is the right
                use of the session.
              </p>
              <p>
                I do not send the questions ahead of time. They work better in conversation than
                as homework, and prepared answers tend to be the answers you think you should
                give. But so you know the kind of thing I am asking:
              </p>
            </div>
            <ul className={styles.dashList} style={{ marginTop: '1.5rem' }}>
              <li>When did you last feel your work really mattered? What was going on?</li>
              <li>Who brings out your best, and what is it they actually do?</li>
              <li>What kind of work makes you lose track of time?</li>
              <li>Does your current role have a path that excites you, or does it feel closed?</li>
              <li>What would enough look like for you?</li>
            </ul>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                Usually one session. Sometimes it runs into a second, which is fine.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Bring your values with you</h2>
            <div className={styles.callout}>
              <p>
                By now you will have worked through the{' '}
                <a href="/professional-narrative/values" style={{ color: '#0EB2CD' }}>values
                exercise</a>. Have your three to five in front of you for this session.
              </p>
              <p className={styles.calloutEmphasis}>
                Purpose is where they earn their keep. It is much easier to say what makes work
                meaningful when you have already named what you will not trade away.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <div className={styles.outputBox}>
              <p className={styles.outputLabel}>What you walk away with</p>
              <p className={styles.outputBody}>
                A written summary with the themes that came up and detailed notes under each P,
                so you can see where your priorities actually sit rather than where you assume
                they do.
              </p>
            </div>

            <div className={styles.pager} style={{ marginTop: '3rem' }}>
              <a href="/professional-narrative/values" className={styles.pagerLink}>← The values exercise</a>
              <a href="/professional-narrative/the-draft" className={styles.pagerLink}>Next: your first draft →</a>
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
