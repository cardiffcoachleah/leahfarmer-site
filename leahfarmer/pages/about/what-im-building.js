import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from '../../styles/Subpage.module.css'

const CALENDLY = 'https://calendly.com/lfcoaching/free-discovery-call'

export default function WhatImBuilding() {
  return (
    <>
      <Head>
        <title>What I&apos;m Building — Leah Farmer</title>
        <meta name="description" content="The tools and studios I've built and shipped independently: The Launch by Leah, Need a Pep Talk, Launch Sequence, and Wild 369." />
        <link rel="canonical" href="https://www.leahfarmer.com/about/what-im-building" />
        <meta property="og:title" content="What I'm Building — Leah Farmer" />
        <meta property="og:description" content="Tools and studios built and shipped independently, end to end." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/about/what-im-building" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What I'm Building — Leah Farmer" />
        <meta name="twitter:description" content="Tools and studios built and shipped independently, end to end." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/headshot.png" />
      </Head>

      <Nav />

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <div className={styles.pageHeroRow}>
              <div>
                <a href="/about" className={styles.backLink}>← Back to about</a>
                <p className={styles.eyebrow}>Still shipping</p>
                <h1 className={styles.pageTitle}>What I&apos;m building</h1>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.intro}>
              I don&apos;t think you can lead builders well if you&apos;ve stopped building.
            </p>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                So I still build. Conceived, architected, and shipped independently, using
                AI-assisted development. It keeps me technically current, it keeps me honest
                about how hard shipping actually is, and it means when I sit with an
                engineering team I am not talking about software from a distance.
              </p>
            </div>
          </div>
        </section>

        {/* BUILDS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.builds}>

              <a href="https://thelaunchbyleah.com" className={styles.build} target="_blank" rel="noopener">
                <div className={styles.buildHead}>
                  <span className={styles.buildName}>The Launch by Leah</span>
                  <span className={styles.buildUrl}>thelaunchbyleah.com →</span>
                </div>
                <p className={styles.buildBody}>
                  A small appointment-only web studio building websites for coaches,
                  therapists, and solopreneurs ready to go public with their work. The process
                  starts with coaching rather than design: clarifying voice, audience, and
                  positioning before anything gets built. One to three builds a month, so each
                  one gets proper attention.
                </p>
                <p className={styles.buildStack}>Coaching-led web studio · Next.js · Vercel</p>
              </a>

              <a href="https://needapeptalk.com" className={styles.build} target="_blank" rel="noopener">
                <div className={styles.buildHead}>
                  <span className={styles.buildName}>Need a Pep Talk</span>
                  <span className={styles.buildUrl}>needapeptalk.com →</span>
                </div>
                <p className={styles.buildBody}>
                  Some days are just hard. Sometimes you don&apos;t need advice, you need
                  someone to see you clearly and say the true thing with warmth. A free tool
                  that writes you exactly that. Takes two minutes. My first solo full-stack
                  build, end to end.
                </p>
                <p className={styles.buildStack}>Next.js · Supabase · Resend · Vercel · Anthropic API</p>
              </a>

              <a href="https://launchsequence.io" className={styles.build} target="_blank" rel="noopener">
                <div className={styles.buildHead}>
                  <span className={styles.buildName}>Launch Sequence</span>
                  <span className={styles.buildUrl}>launchsequence.io →</span>
                </div>
                <p className={styles.buildBody}>
                  Your first ninety days, planned before day one. A transition companion for
                  leaders stepping into a new job, a promotion, or a career pivot. Structured
                  around observe, orient, and act, with wellbeing check-ins that ask how you
                  are holding up rather than only what you are doing. Built by a coach who has
                  lived this transition six times.
                </p>
                <p className={styles.buildStack}>Next.js · AI-generated transition plans · Wellbeing check-ins</p>
              </a>

              <a href="https://wild369.com" className={styles.build} target="_blank" rel="noopener">
                <div className={styles.buildHead}>
                  <span className={styles.buildName}>Wild 369</span>
                  <span className={styles.buildUrl}>wild369.com →</span>
                </div>
                <p className={styles.buildBody}>
                  An affirmation app built around Nikola Tesla&apos;s fascination with the
                  power of three, six, and nine. The most personal of the four, and the one
                  that has least to do with work. I am drawn to the mystical and the
                  intentional, and this is where that lives.
                </p>
                <p className={styles.buildStack}>TypeScript · Supabase · Resend</p>
              </a>

            </div>
          </div>
        </section>

        {/* WHY */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Why this matters to the work</h2>
            <div className={styles.prose}>
              <p>
                Every one of these started as something I wanted to exist and could not find.
                Each one taught me something I now use with clients: how quickly an idea meets
                reality, where AI tooling helps and where it quietly makes things worse, what
                it costs to actually finish something rather than leave it at ninety percent.
              </p>
              <p>
                It also means the AI strategy work I do with companies is grounded in having
                built with these tools rather than having read about them.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Building something yourself?</h2>
            <p>Happy to talk about it, whether or not it turns into work together.</p>
            <a href={CALENDLY} className={styles.ctaButton} target="_blank" rel="noopener">
              Book a call →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
