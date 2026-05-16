import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Coaching for Tech Leaders — Leah Farmer</title>
        <meta name="description" content="ICF PCC-certified coaching for product managers, engineers, designers, founders, and leaders in tech. Based in Cardiff, working globally." />
        <link rel="canonical" href="https://www.leahfarmer.com/coaching" />
        <meta property="og:title" content="Coaching for Tech Leaders — Leah Farmer" />
        <meta property="og:description" content="ICF PCC-certified coaching for product managers, engineers, designers, founders, and leaders in tech. Based in Cardiff, working globally." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/coaching" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coaching for Tech Leaders — Leah Farmer" />
        <meta name="twitter:description" content="ICF PCC-certified coaching for product managers, engineers, designers, founders, and leaders in tech. Based in Cardiff, working globally." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/headshot.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <p className={styles.eyebrow}>Coaching</p>
            <div className={styles.pageHeroRow}>
              <h1 className={styles.pageTitle}>
                You&apos;re good at what you do.<br />
                You want to be better.
              </h1>
              <a
                href="https://calendly.com/lfcoaching/free-discovery-call"
                className={styles.heroCtaRound}
                target="_blank"
                rel="noopener"
              >
                Book a free<br />discovery call
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              Maybe you&apos;re a product manager finding your footing as a senior. Maybe you&apos;re an engineer who&apos;s been the best in the room for years and now wants to lead — or just wants to finally understand how the product side thinks. Maybe you&apos;re a leader who&apos;s carrying a lot and starting to feel it. Maybe you&apos;re a founder trying to figure out who to hire and what to build next. Maybe you just want someone in your corner who actually understands the world you work in.
            </p>
            <p>
              That&apos;s who I coach. Builders in tech — PMs, engineers, designers, founders, leaders — who care about their craft, their teams, and how they show up.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 className={styles.sectionTitleTeal}>How I work</h2>
                <div className={styles.prose}>
                  <p>
                    Sessions are 60 minutes, online. Some clients come weekly when something&apos;s pressing. Some settle into every two weeks. Some book a block of sessions, work through what they need, then come back when the next thing surfaces. A few have been with me for years.
                  </p>
                  <p>
                    I don&apos;t have a fixed programme I run everyone through. Most clients want to bring the problem and work on it together — and that&apos;s mostly what we do. If you need more structure, tools, frameworks, a Miro board and reading list, I can do that too.
                  </p>
                  <p>
                    What I will do, regardless of where you are, is ask you questions you might not expect. Sometimes about what you&apos;re feeling. Sometimes about where you feel it. Not because I&apos;m a therapist — I&apos;m not — but because the body often knows something the spreadsheet doesn&apos;t. You don&apos;t have to be comfortable with that from day one. Most people aren&apos;t. It tends to become useful anyway.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(14, 178, 205, 0.2)', paddingLeft: '2rem' }}>
                <img
                  src="/TPR Logo Round.png"
                  alt="The Product Room"
                  style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '1rem' }}
                />
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  Looking for community?
                </p>
                <a
                  href="https://www.skool.com/the-product-room-9295"
                  target="_blank"
                  rel="noopener"
                  style={{ fontSize: '0.8rem', color: '#0EB2CD', textDecoration: 'none', borderBottom: '1px solid rgba(14, 178, 205, 0.4)', paddingBottom: '2px', letterSpacing: '0.02em' }}
                >
                  Check out The Product Room on Skool →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Working with me</h2>
            <div className={styles.prose}>
              <p>
                I work with clients across the UK, Europe, the US, and beyond — so rather than list a price that might not make sense in your currency, I keep it simple: get in touch and I&apos;ll send you pricing in your local currency.
              </p>
            </div>
            <div className={styles.packages}>
              <div className={styles.package}>
                <h3>Deep Dive</h3>
                <p>One 90-minute session, one focused problem. Good if you want to try this before committing to more.</p>
              </div>
              <div className={styles.package}>
                <h3>Four Sessions</h3>
                <p>60 minutes each, use them at your own pace. Most people start here.</p>
              </div>
              <div className={styles.package}>
                <h3>Ten Sessions</h3>
                <p>For when you know you need more runway. Includes async support between sessions via Voxer or WhatsApp.</p>
              </div>
            </div>
            <p className={styles.packageNote}>
              All packages valid for 12 months. Start with four and want ten? I&apos;ll just bill you the difference.{' '}
              <a href="mailto:leah@leahfarmer.com">Companies and teams: get in touch.</a>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What clients say</h2>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &quot;She goes beyond each session, follows up consistently, and ensures ideas translate into real progress. Working with her has made a meaningful difference to how I operate as a product manager.&quot;
                </p>
                <div className={styles.testimonialAttrib}>
                  <span className={styles.testimonialName}>Jonida Ndreu</span>
                  <span className={styles.testimonialRole}>Director of Product, PPRO</span>
                </div>
              </div>
              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &quot;The true brilliance in her coaching is the combination of her lifelong world-class technical experience and guidance mixed with the emotional intelligence she possesses.&quot;
                </p>
                <div className={styles.testimonialAttrib}>
                  <span className={styles.testimonialName}>Fran Khayat</span>
                  <span className={styles.testimonialRole}>Product Builder</span>
                </div>
              </div>
              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &quot;Her method perfectly blends kindness and pragmatism, drawing from her rich experience.&quot;
                </p>
                <div className={styles.testimonialAttrib}>
                  <span className={styles.testimonialName}>Andreu Pagès</span>
                  <span className={styles.testimonialRole}>Product Leader, B2B SaaS</span>
                </div>
              </div>
              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &quot;Her ability to pinpoint what the actual issue is exceptional. I enjoyed every one of our sessions, and know who to call when I need advice down the road.&quot;
                </p>
                <div className={styles.testimonialAttrib}>
                  <span className={styles.testimonialName}>Carl Fredrik Klintner</span>
                  <span className={styles.testimonialRole}>Product at Insurello</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Ready to talk?</h2>
            <p>Book a free 20-minute discovery call. No obligation.</p>
            <a
              href="https://calendly.com/lfcoaching/free-discovery-call"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener"
            >
              Book a discovery call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
