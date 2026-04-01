import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'

export default function Fractional() {
  return (
    <>
      <Head>
        <title>Fractional & Advisory — Leah Farmer</title>
        <meta name="description" content="Fractional CPO/CPTO, product due diligence for VCs and PEs, and team interventions for companies building in tech." />
      </Head>
      <Nav />

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <p className={styles.eyebrow}>Fractional & Advisory</p>
            <h1 className={styles.pageTitle}>For the companies and investors<br />building in tech</h1>
          </div>
        </section>

        {/* OPENING */}
        <section className={styles.section}>
          <div className={styles.prose}>
            <p>VCs are good at technical due diligence. They'll tell you if the architecture is sound, if the team can ship, if the code is a mess. What they rarely do well is product due diligence — whether the thing being built is the right thing, whether the roadmap reflects real customer understanding, whether the product leader knows the difference between a strategy and a list of features.</p>
            <p>That's the gap I work in.</p>
            <p>I've spent 25 years building and leading product and technology at companies including Amazon, Expedia, and two Sequoia-backed startups. I know what good looks like. I know what it looks like when a founding team is talented but building in the wrong direction. And I can usually tell the difference faster than most people in the room.</p>
            <p>I work with companies and investors in three ways:</p>
          </div>
        </section>

        {/* THREE SERVICES */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.services}>

              <div className={styles.service}>
                <span className={styles.serviceNumber}>01</span>
                <h2 className={styles.serviceTitle}>Fractional Leadership</h2>
                <p>Some companies need a senior product and technology leader but aren't ready — or don't need — a full-time hire. I come in as your CPO, CPTO, or VP Product. One day a week, two days, three — whatever the company needs. I work alongside your founders and leadership team to build strategy, grow your product function, and get your builders moving in the right direction.</p>
                <p className={styles.serviceNote}>Currently serving as fractional CPTO at a travel startup. Open to one additional engagement.</p>
              </div>

              <div className={styles.serviceDivider} />

              <div className={styles.service}>
                <span className={styles.serviceNumber}>02</span>
                <h2 className={styles.serviceTitle}>Product Advisory</h2>
                <p>For VCs, PEs, and founders: technical due diligence tells you if the architecture is sound. Product due diligence tells you if the company is building the right thing — and that question doesn't get asked nearly enough. While your CTO advisor is looking at the code and the infrastructure, I'm looking at the roadmap, the customer understanding, the product strategy, and whether the person leading it actually knows what they're doing.</p>
                <p>It's not a replacement for technical due diligence. It's what sits alongside it.</p>
              </div>

              <div className={styles.serviceDivider} />

              <div className={styles.service}>
                <span className={styles.serviceNumber}>03</span>
                <h2 className={styles.serviceTitle}>Team Interventions</h2>
                <p>Sometimes a team is stuck. Communication has broken down, burnout is spreading, or nobody can agree on how to work together. I come in, diagnose what's actually going on, and help fix it. This might be a working genius mapping session, a burnout workshop, a communication reset — whatever the situation calls for.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Not sure which fits?</h2>
            <p>Most good engagements start with a conversation. Get in touch and we'll figure it out together.</p>
            <a href="https://calendly.com/lfcoaching/free-discovery-call" className={styles.ctaButton} target="_blank" rel="noopener">Book a call</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
