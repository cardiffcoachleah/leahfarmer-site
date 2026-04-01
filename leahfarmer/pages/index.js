import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const COMPANIES = ['Amazon', 'Google', 'GitHub', 'EA', 'Expedia', 'Klarna', 'Stripe', 'Meta']

export default function Home() {
  return (
    <>
      <Head>
        <title>Leah Farmer — Coaching & Advisory</title>
        <meta name="description" content="Twenty-five years in tech. I work with companies who need a senior technical leader and with the people inside them who want to grow." />
      </Head>
      <Nav />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroPhoto}>
            <img src="/headshot.png" alt="Leah Farmer" />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              I build.<br />I lead.<br />I coach.
            </h1>
            <p className={styles.heroSubhead}>
              Twenty-five years in tech and I'm still learning, still building, still genuinely curious about what's next. I work with companies who need a senior technical leader — and with the people inside them who want to grow.
            </p>
            <div className={styles.heroCtas}>
              <a href="/fractional" className={styles.ctaBtn}>Fractional & Advisory</a>
              <a href="/coaching" className={styles.ctaBtn}>Coaching</a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className={styles.logoStrip}>
        <p className={styles.logoLabel}>I've worked with people from:</p>
        <div className={styles.logos}>
          {COMPANIES.map(company => (
            <span key={company} className={styles.logoItem}>{company}</span>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <blockquote className={styles.quote}>
            "She has a keen ability to get to the core of an issue quickly, effortlessly providing clear and concise insights and new perspectives."
          </blockquote>
          <cite className={styles.quoteAttrib}>— Mark Holleman, Co-Founder & CEO, Thred</cite>
        </div>
      </section>

      {/* MID CTA */}
      <section className={styles.midCta}>
        <div className={styles.midCtaInner}>
          <div className={styles.midCtaCard}>
            <h3>Looking for a fractional leader or advisor?</h3>
            <p>I work alongside founders and investors as a senior product and technology executive.</p>
            <a href="/fractional" className={styles.ctaBtn}>Fractional & Advisory →</a>
          </div>
          <div className={styles.midCtaCard}>
            <h3>Looking for a coach?</h3>
            <p>I work with builders in tech — PMs, engineers, designers, and leaders — who want to grow.</p>
            <a href="/coaching" className={styles.ctaBtn}>Coaching →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
