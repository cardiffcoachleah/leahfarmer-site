import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Leah Farmer</title>
        <meta name="description" content="Senior technology executive and ICF PCC-certified coach with 25 years building products and leading teams. Based in Cardiff, Wales." />
        <link rel="canonical" href="https://www.leahfarmer.com/about" />
        <meta property="og:title" content="About — Leah Farmer" />
        <meta property="og:description" content="Senior technology executive and ICF PCC-certified coach with 25 years building products and leading teams. Based in Cardiff, Wales." />
        <meta property="og:image" content="https://www.leahfarmer.com/leah-about.jpg" />
        <meta property="og:url" content="https://www.leahfarmer.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About — Leah Farmer" />
        <meta name="twitter:description" content="Senior technology executive and ICF PCC-certified coach with 25 years building products and leading teams. Based in Cardiff, Wales." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/leah-about.jpg" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <section className={styles.aboutHero}>
          <div className={styles.aboutHeroInner}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/leah-about.jpg"
                alt="Leah Farmer"
                width={600}
                height={800}
                priority
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.aboutOpening}>
              <p className={styles.openingText}>
                For 25 years I&apos;ve built things in tech. Some things you&apos;ve probably used. Some things that never saw the light of day. These days I do some of that still — and I coach people in tech so they don&apos;t get stuck, don&apos;t burn out, and can grow into the kinds of leaders they actually want to be. Because that part matters too.
              </p>
              <a
                href="https://calendly.com/lfcoaching/free-discovery-call"
                className={styles.aboutCta}
                target="_blank"
                rel="noopener"
              >
                Work with me →
              </a>
            </div>
          </div>
        </section>

        <section className={styles.aboutBody}>
          <div className={styles.aboutBodyInner}>
            <div className={styles.credentials}>
              <p>
                Leah Farmer is a senior technology executive and ICF PCC-certified coach with 25 years of experience building products and leading teams — including at Amazon, Expedia, and two Sequoia-backed startups. She currently serves as a fractional CPTO at a travel startup, and works as a coach with the builders of the tech world: product managers, engineers, designers, founders, and the leaders who work alongside them.
              </p>
              <p>
                She deliberately keeps a foot in both worlds. Leading teams keeps her close to the real challenges her coaching clients face — the organisational dynamics, the craft decisions, the pressure of shipping. Coaching keeps her honest about the human side of leadership. She is based in Cardiff, Wales.
              </p>
            </div>

            <div className={styles.divider} />

            <div className={styles.human}>
              <h2 className={styles.humanTitle}>Beyond the work</h2>
              <p>
                I&apos;m a sister, an aunt, and a devoted friend. I&apos;ve lived in Seattle, Stockholm, Denver, Berlin, and London — and I&apos;ve landed, by choice, in Cardiff. I wanted space, countryside, and a smaller city after years of big ones. Cardiff gives me all of that, plus easy access to some of the most beautiful coastline in the world.
              </p>
              <p>
                I grew up in California but New Mexico is where I lived the longest and it still feels like home. I miss the skies and the green chilli more than I can explain. I learned to swim in the Caribbean — my parents were missionaries and Honduras was part of my early life. Water has felt like home ever since.
              </p>
              <div className={styles.catsRow}>
                <Image
                  src="/oliver-lucy.jpg"
                  alt="Oliver and Lucy"
                  width={600}
                  height={400}
                />
                <p>
                  I have two cats, Oliver and Lucy. I love books — fiction, nonfiction, business, all of it. I write, I journal, I follow the moon. I&apos;m drawn to the mystical and the intentional. I meditate. I set intentions. I believe there&apos;s more going on than most spreadsheets account for.
                </p>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.elsewhere}>
              <p>
                If you want to read more of my writing, you can find me on{' '}
                <a href="https://leahfarmer.substack.com" target="_blank" rel="noopener">Substack</a>.
                I also host{' '}
                <a href="https://open.spotify.com/show/5E8h0h6ksFjHrIgSujT6oK" target="_blank" rel="noopener">One Question</a>
                {' '}— a weekly podcast where I ask one question to one interesting person. You can connect with me on{' '}
                <a href="https://instagram.com/leahfarmercoaching" target="_blank" rel="noopener">Instagram</a> too.
              </p>
              <p>
                I also built{' '}
                <a href="https://needapeptalk.com" target="_blank" rel="noopener">Need a Pep Talk</a>
                {' '}— a free tool that writes you something honest and warm when you&apos;re having one of those days. Because sometimes that&apos;s exactly what&apos;s needed.
              </p>
              <p>
                And I run{' '}
                <a href="https://thelaunchbyleah.com" target="_blank" rel="noopener">The Launch by Leah</a>
                {' '}— a small studio where I build websites for coaches, healers, and solopreneurs ready to go public with their work.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
