import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Leah Farmer',
    url: 'https://www.leahfarmer.com',
    image: 'https://www.leahfarmer.com/headshot.png',
    jobTitle: 'Fractional CPTO & ICF PCC Executive Coach',
    description:
      'Senior technology executive and ICF PCC-certified coach with 25 years building products and leading teams at Amazon, Expedia, and two Sequoia-backed startups.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cardiff',
      addressRegion: 'Wales',
      addressCountry: 'GB',
    },
    sameAs: [
      'https://linkedin.com/in/leahfarmer',
      'https://instagram.com/leahfarmercoaching',
      'https://leahfarmer.substack.com',
      'https://open.spotify.com/show/5E8h0h6ksFjHrIgSujT6oK',
    ],
  }

  return (
    <>
      <Head>
        <title>Leah Farmer — Coaching &amp; Advisory</title>
        <meta name="description" content="Twenty-five years in tech. I work with companies who need a senior technical leader and with the people inside them who want to grow." />
        <link rel="canonical" href="https://www.leahfarmer.com/" />
        <meta property="og:title" content="Leah Farmer — Coaching & Advisory" />
        <meta property="og:description" content="Twenty-five years in tech. I work with companies who need a senior technical leader and with the people inside them who want to grow." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leah Farmer — Coaching & Advisory" />
        <meta name="twitter:description" content="Twenty-five years in tech. I work with companies who need a senior technical leader and with the people inside them who want to grow." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/headshot.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Nav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroPhoto}>
            <Image
              src="/headshot.png"
              alt="Leah Farmer"
              width={500}
              height={500}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              I build.<br />
              I lead.<br />
              I coach.
            </h1>
            <p className={styles.heroSubhead}>
              Twenty-five years in tech and I&apos;m still learning, still building, still genuinely curious about what&apos;s next. I work with companies who need a senior technical leader — and with the people inside them who want to grow.
            </p>
            <div className={styles.heroCtas}>
              <a href="/fractional" className={styles.ctaBtn}>Fractional &amp; Advisory</a>
              <a href="/coaching" className={styles.ctaBtn}>Coaching</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.logoStrip}>
        <p className={styles.logoLabel}>I&apos;ve worked with people from:</p>
        <div className={styles.logos}>
          <span className={styles.logoItem}>Amazon</span>
          <span className={styles.logoItem}>Google</span>
          <span className={styles.logoItem}>GitHub</span>
          <span className={styles.logoItem}>EA</span>
          <span className={styles.logoItem}>Expedia</span>
          <span className={styles.logoItem}>Klarna</span>
          <span className={styles.logoItem}>Stripe</span>
          <span className={styles.logoItem}>Meta</span>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <blockquote className={styles.quote}>
            &quot;She has a keen ability to get to the core of an issue quickly, effortlessly providing clear and concise insights and new perspectives.&quot;
          </blockquote>
          <cite className={styles.quoteAttrib}>— Mark Holleman, Co-Founder &amp; CEO, Thred</cite>
        </div>
      </section>

      <section className={styles.midCta}>
        <div className={styles.midCtaInner}>
          <div className={styles.midCtaCard}>
            <h3>Looking for a fractional leader or advisor?</h3>
            <p>I work alongside founders and investors as a senior product and technology executive.</p>
            <a href="/fractional" className={styles.ctaBtn}>Fractional &amp; Advisory →</a>
          </div>
          <div className={styles.midCtaCard}>
            <h3>Looking for a coach?</h3>
            <p>I work with builders in tech — PMs, engineers, designers, and leaders — who want to grow.</p>
            <a href="/coaching" className={styles.ctaBtn}>Coaching →</a>
          </div>
        </div>
      </section>

      <section className={styles.pepTalk}>
        <div className={styles.pepTalkInner}>
          <p className={styles.pepTalkEyebrow}>Try something new</p>
          <h2 className={styles.pepTalkTitle}>Sometimes the head needs the body to catch up.</h2>
          <p className={styles.pepTalkBody}>
            EFT tapping works on the stress response directly, which is why a knot you have been talking around for months can shift inside a single session. I&apos;m finishing my final certification hours, so private one-to-one sessions are half price for now.
          </p>
          <a href="/eft" className={styles.pepTalkCta}>
            Book an EFT session →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
