import Head from 'next/head'
import styles from '../../styles/Narrative.module.css'

export default function TheDraft() {
  return (
    <>
      <Head>
        <title>Your First Draft — The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="You write the first draft. I mark it up. Then we practice saying it out loud." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative/the-draft" />
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
            <p className={styles.eyebrow}>Step five</p>
            <h1 className={styles.pageTitle}>
              Your <em>first draft</em>
            </h1>
            <p className={styles.heroLede}>
              By now you have your Working Genius readout, your CV walkthrough themes, your
              values, and your 5 Ps summary. The raw material is all there. This is where you
              turn it into something you can say out loud.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>You write it</h2>
            <div className={styles.callout}>
              <p>
                I will not write this for you and I will not give you a polished paragraph to
                approve. You would read it, nod, and feel nothing.
              </p>
              <p className={styles.calloutEmphasis}>
                The wrestling is the mechanism. It is what makes the thing hold up when a
                stranger asks you a hard question about it.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How to approach it</h2>
            <ul className={styles.dashList}>
              <li>I send you a template with the three sections, a short explanation of each, and space to write. Plus a few sample narratives from other people, so you can see the range rather than a format to copy.</li>
              <li>Write honestly before you write well. Rough is fine. Bullets are fine.</li>
              <li>A paragraph or two per section. It should land on one page when we are finished.</li>
              <li>Pull from the documents you already have. Each section of the template tells you which one feeds it.</li>
              <li>Do not polish it. Send it to me messy. If you polish it first you will defend it instead of working on it.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Then we work on it</h2>
            <div className={styles.prose}>
              <p>
                I read it and mark it up before we meet, so the session is spent on the parts
                that need thinking rather than on me reading in silence.
              </p>
              <p>
                Two things I am listening for. The places where you hedge, which usually means
                you do not quite believe the claim yet. And the places where you sound like
                someone else, which usually means you borrowed a phrase because your own felt
                too plain. Your own is almost always better.
              </p>
              <p>
                Then we practice. You say it to me as an elevator pitch, as an interview answer,
                as the thing you say when someone at an event asks what you do. The spoken
                version is a different animal from the written one, and you need both.
              </p>
              <p className={styles.proseEmphasis}>
                It usually changes once you hear yourself say it. That is the point of saying it.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <div className={styles.outputBox}>
              <p className={styles.outputLabel}>What you walk away with</p>
              <p className={styles.outputBody}>
                Your narrative on a single page, in your words, dated. Yours to keep and to
                revise. Come back to it in two years and you will see how much has moved.
              </p>
            </div>

            <div className={styles.pager} style={{ marginTop: '3rem' }}>
              <a href="/professional-narrative/five-ps" className={styles.pagerLink}>← The 5 Ps</a>
              <a href="/professional-narrative/story-map" className={styles.pagerLink}>Next: the story map →</a>
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
