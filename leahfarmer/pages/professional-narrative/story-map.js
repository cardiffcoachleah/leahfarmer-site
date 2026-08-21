import Head from 'next/head'
import styles from '../../styles/Narrative.module.css'

const CALENDLY = 'https://calendly.com/lfcoaching/free-discovery-call'

export default function StoryMap() {
  return (
    <>
      <Head>
        <title>The Story Map — The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="Interview questions built from your narrative, and the stories from your own career that answer them." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative/story-map" />
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
            <p className={styles.eyebrow}>Step six</p>
            <h1 className={styles.pageTitle}>
              The <em>story map</em>
            </h1>
            <p className={styles.heroLede}>
              A narrative you believe is worth a lot. A narrative you can back up with three
              specific stories the moment someone pushes on it is worth considerably more. This
              is where the whole thing turns into something you can actually use in a room.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Not a question bank</h2>
            <div className={styles.prose}>
              <p>
                There are a thousand lists of common interview questions online and they are
                worth roughly what you pay for them. Generic questions produce generic answers.
              </p>
              <p>
                So I do this the other way around. I take your finished narrative and build a
                set of questions from it. Given what you are claiming about yourself, what would
                a sharp interviewer ask? Some of it is standard. Some is specific to your
                industry. Some goes at leadership. All of it is aimed at you rather than at a
                generic candidate.
              </p>
              <p className={styles.proseEmphasis}>
                That is prep work I do between sessions, so we spend the session on the part
                that needs both of us.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How it works</h2>
            <ul className={styles.dashList}>
              <li>I send you the question set after the draft session. Your homework is to read through and mark the ones you would struggle to answer well.</li>
              <li>We meet with those already flagged, so we start at the hard ones rather than reading a list out loud.</li>
              <li>For each question, we find the story from your career that answers it. They are already in your CV walkthrough notes, in what you said you were proudest of.</li>
              <li>We work on the telling. Where the story starts, what actually changed, what you took from it, and where to stop talking.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Bullets, not scripts</h2>
            <div className={styles.prose}>
              <p>
                The document you end up with does not contain written-out answers. Each story is
                four or five beats: the situation, what you did, what changed, what you learned.
              </p>
              <p>
                If you write the answer out in full you will memorize it, and a memorized answer
                comes out flat. Interviewers can hear it. The bullets keep the story alive so
                you tell it slightly differently each time, which is what a real story sounds
                like.
              </p>
              <p>
                Same reasoning as making you write the narrative yourself.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Where it goes from here</h2>
            <div className={styles.prose}>
              <p>
                Most people carry on from here into their CV and their LinkedIn profile. Both
                get sharper once there is a point of view underneath them, and both are much
                easier to write when you already know what you are claiming.
              </p>
              <p>
                Some people want more interview practice. Some want to keep going on a specific
                part of the narrative. That is outside the six sessions and we add them as you
                need them.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <div className={styles.outputBox}>
              <p className={styles.outputLabel}>What you walk away with</p>
              <p className={styles.outputBody}>
                A document mapping your three narrative sections to the questions they invite,
                and the stories from your own career that answer them. Banked, in your own
                words, ready before you need them.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <a href={CALENDLY} className={styles.button} target="_blank" rel="noopener">
                Book a discovery call
              </a>
            </div>

            <div className={styles.pager} style={{ marginTop: '3rem' }}>
              <a href="/professional-narrative/the-draft" className={styles.pagerLink}>← Your first draft</a>
              <a href="/professional-narrative" className={styles.pagerLink}>Back to the overview →</a>
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
