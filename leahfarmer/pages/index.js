import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leah Farmer — Coaching & Advisory</title>
        <meta name="description" content="Twenty-five years in tech. I work with companies who need a senior technical leader and with the people inside them who want to grow." />
        <link rel="icon" href="/favicon.ico" />
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
              <a href="/fractional" className={styles.ctaPrimary}>Fractional & Advisory</a>
              <a href="/coaching" className={styles.ctaSecondary}>Coaching</a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className={styles.logoStrip}>
        <p className={styles.logoLabel}>I've worked with people from:</p>
        <div className={styles.logos}>
          {['Amazon', 'Google', 'GitHub', 'EA', 'Expedia', 'Klarna', 'Stripe', 'Meta'].map(company => (
            <span key={company} className={styles.logoItem}>{company}</span>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.quoteMark}>"</div>
          <blockquote className={styles.quote}>
            She has a keen ability to get to the core of an issue quickly, effortlessly providing clear and concise insights and new perspectives.
          </blockquote>
          <cite className={styles.quoteAttrib}>— Mark Holleman, Co-Founder & CEO, Thred</cite>
        </div>
      </section>

      <Footer />
    </>
  )
}
