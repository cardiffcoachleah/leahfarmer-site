import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Coaching — Leah Farmer</title>
        <meta name="description" content="Coaching for builders in tech — PMs, engineers, designers, founders, and leaders who care about their craft and how they show up." />
      </Head>
      <Nav />

      <main className={styles.main}>

        {/* PAGE HERO with CTA button */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <p className={styles.eyebrow}>Coaching</p>
            <div className={styles.pageHeroRow}>
              <h1 className={styles.pageTitle}>You're good at what you do.<br />You want to be better.</h1>
              <a href="https://calendly.com/lfcoaching/free-discovery-call" className={styles.heroCtaRound} target="_blank" rel="noopener">
                Book a free<br />discovery call
              </a>
            </div>
          </div>
        </section>

        {/* OPENING */}
        <section className={styles.section}>
          <div className={styles.prose}>
            <p>Maybe you're a product manager finding your footing as a senior. Maybe you're an engineer who's been the best in the room for years and now wants to lead — or just wants to finally understand how the product side thinks. Maybe you're a leader who's carrying a lot and starting to feel it. Maybe you're a founder trying to figure out who to hire and what to build next. Maybe you just want someone in your corner who actually understands the world you work in.</p>
            <p>That's who I coach. Builders in tech — PMs, engineers, designers, founders, leaders — who care about their craft, their teams, and how they show up.</p>
          </div>
        </section>

        {/* HOW I WORK */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How I work</h2>
            <div className={styles.prose}>
              <p>Sessions are 60 minutes, online. Some clients come weekly when something's pressing. Some settle into every two weeks. Some book a block of sessions, work through what they need, then come back when the next thing surfaces. A few have been with me for years.</p>
              <p>I don't have a fixed programme I run everyone through. Most clients want to bring the problem and work on it together — and that's mostly what we do. If you need more structure, tools, frameworks, a Miro board and reading list, I can do that too.</p>
              <p>What I will do, regardless of where you are, is ask you questions you might not expect. Sometimes about what you're feeling. Sometimes about where you feel it. Not because I'm a therapist — I'm not — but because the body often knows something the spreadsheet doesn't. You don't have to be comfortable with that from day one. Most people aren't. It tends to become useful anyway.</p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Working with me</h2>
            <div className={styles.prose}>
              <p>I work with clients across the UK, Europe, the US, and beyond — so rather than list a price that might not make sense in your currency, I keep it simple: get in touch and I'll send you pricing in your local currency.</p>
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
            <p className={styles.packageNote}>All packages valid for 12 months. Start with four and want ten? I'll just bill you the difference. <a href="mailto:leah@leahfarmer.com">Companies and teams: get in touch.</a></p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What clients say</h2>
            <div className={styles.testimonials}>
              {[
                {
                  quote: "She goes beyond each session, follows up consistently, and ensures ideas translate into real progress. Working with her has made a meaningful difference to how I operate as a product manager.",
                  name: "Jonida Ndreu",
                  role: "Director of Product, PPRO"
                },
                {
                  quote: "The true brilliance in her coaching is the combination of her lifelong world-class technical experience and guidance mixed with the emotional intelligence she possesses.",
                  name: "Fran Khayat",
                  role: "Product Builder"
                },
                {
                  quote: "Her method perfectly blends kindness and pragmatism, drawing from her rich experience.",
                  name: "Andreu Pagès",
                  role: "Product Leader, B2B SaaS"
                },
                {
                  quote: "Her ability to pinpoint what the actual issue is exceptional. I enjoyed every one of our sessions, and know who to call when I need advice down the road.",
                  name: "Carl Fredrik Klintner",
                  role: "Product at Insurello"
                }
              ].map((t, i) => (
                <div key={i} className={styles.testimonial}>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                  <div className={styles.testimonialAttrib}>
                    <span className={styles.testimonialName}>{t.name}</span>
                    <span className={styles.testimonialRole}>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Ready to talk?</h2>
            <p>Book a free 20-minute discovery call. No obligation.</p>
            <a href="https://calendly.com/lfcoaching/free-discovery-call" className={styles.ctaButton} target="_blank" rel="noopener">Book a discovery call</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
