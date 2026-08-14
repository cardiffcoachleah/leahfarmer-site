import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'
import d from '../styles/Deep.module.css'

const CALENDLY = 'https://calendly.com/lfcoaching/free-discovery-call'

export default function FractionalCPO() {
  return (
    <>
      <Head>
        <title>Fractional Product &amp; Technology Leader — Leah Farmer</title>
        <meta name="description" content="Fractional CPO, CPTO, and VP Product. An embedded senior product and engineering leader, part time, accountable for outcomes. 25 years at Amazon, Expedia, and two Sequoia-backed startups." />
        <link rel="canonical" href="https://www.leahfarmer.com/fractional-cpo" />
        <meta property="og:title" content="Fractional Product & Technology Leader — Leah Farmer" />
        <meta property="og:description" content="An embedded senior product and engineering leader, part time. Strategy, roadmap, and building the function." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/fractional-cpo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fractional Product & Technology Leader — Leah Farmer" />
        <meta name="twitter:description" content="An embedded senior product and engineering leader, part time. Strategy, roadmap, and building the function." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/headshot.png" />
      </Head>

      <Nav />

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <div className={styles.pageHeroRow}>
              <div>
                <p className={styles.eyebrow}>Fractional Leadership</p>
                <h1 className={styles.pageTitle}>
                  A senior product and engineering leader,<br />embedded in your team
                </h1>
              </div>
              <a href={CALENDLY} className={styles.heroCtaRound} target="_blank" rel="noopener">
                Let&apos;s<br />talk
              </a>
            </div>
          </div>
        </section>

        {/* OPENING */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.prose}>
              <p>
                I come in as your CPO, CPTO, or VP Product. Not as a consultant who delivers
                a deck and leaves, and not as extra delivery capacity. As a leader on your
                team, in the room, accountable for whether the product works.
              </p>
              <p>
                Executive-level product and technology leadership without the delay, the
                cost, or the commitment of a full-time hire. The seat gets filled in week
                one instead of six months into a search.
              </p>
            </div>
          </div>
        </section>

        {/* WHEN THIS MAKES SENSE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>When this makes sense</h2>
            <ul className={d.dashList}>
              <li>
                <strong>Engineers are shipping, but nobody decides what gets built.</strong>{' '}
                Velocity looks fine. Direction does not.
              </li>
              <li>
                <strong>The founder is still head of product and has become the bottleneck.</strong>{' '}
                Every decision routes through one calendar.
              </li>
              <li>
                <strong>You raised, you hired PMs, and the function is not gelling.</strong>{' '}
                Good people, no operating model.
              </li>
              <li>
                <strong>You are between product leaders.</strong> A search takes months. Drift
                is expensive and momentum is hard to rebuild.
              </li>
              <li>
                <strong>You need a credible product voice for the board or the next raise.</strong>{' '}
                Someone who can defend the strategy under real questioning.
              </li>
              <li>
                <strong>Product and engineering have stopped speaking the same language.</strong>{' '}
                I have run both, so I can sit in the middle without picking a side.
              </li>
            </ul>
          </div>
        </section>

        {/* WHAT I DO */}
        <section className={styles.section}>
          <div className={styles.pillarsWrap}>
            <h2 className={styles.sectionTitleTeal}>What I do</h2>
            <div className={styles.pillars}>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Strategy and direction</h3>
                <p>
                  Product vision and strategy tied to measurable outcomes. Where you play,
                  what you refuse to build, and why a customer would choose you.
                </p>
                <p>
                  Roadmap prioritization the whole company can follow, including the parts
                  that say no.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Building the function</h3>
                <p>
                  A product operating model that fits the company you are, not the one in the
                  textbook. Team charters, rituals, cross-functional ownership.
                </p>
                <p>
                  Hiring, leveling, and mentoring your PMs so the function becomes
                  self-sufficient. You should need me less over time.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Product and engineering together</h3>
                <p>
                  Getting product, design, and engineering to behave like one group. Clear
                  decision rights, shared commitments, fewer meetings that exist only to
                  resolve confusion.
                </p>
                <p>
                  Plus board and investor communication when it is needed.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 90 DAY PLAN */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>The first ninety days</h2>
            <div className={styles.prose} style={{ marginBottom: '2.5rem' }}>
              <p>
                Observe, orient, act. The same structure I built into Launch Sequence for
                leaders stepping into something new. The difference in a fractional
                engagement is speed. I am not learning the job, only the company, so the
                phases overlap rather than run in sequence. The goal is speed to impact, not
                a tidy timeline.
              </p>
            </div>

            <div className={d.phases}>

              <div className={d.phase}>
                <div className={d.phaseMarker}>Days 1&ndash;30<br />Observe</div>
                <div>
                  <h3 className={d.phaseTitle}>Listen deeply, learn the real landscape</h3>
                  <p>
                    Conversations with founders, product, engineering, design, sales, and
                    support. I read the roadmap, the tickets, the customer feedback, and the
                    last few board decks. I sit in the meetings you already have rather than
                    creating new ones.
                  </p>
                  <p>
                    I am also acting from week one where something is obviously broken.
                    Waiting thirty days to fix a thing everyone can already see costs you
                    time and costs me credibility.
                  </p>
                </div>
              </div>

              <div className={d.phase}>
                <div className={d.phaseMarker}>Days 31&ndash;60<br />Orient</div>
                <div>
                  <h3 className={d.phaseTitle}>Form a point of view, earn the right to it</h3>
                  <p>
                    A written read-back to the leadership team. What is working, what is
                    broken, and what I think it is costing you. Direct, in plain language,
                    with the uncomfortable parts left in.
                  </p>
                  <p>
                    We agree the two or three changes that move the most, and I score some
                    early wins so the team sees a difference before anyone is asked to trust a
                    bigger bet.
                  </p>
                </div>
              </div>

              <div className={d.phase}>
                <div className={d.phaseMarker}>Days 61&ndash;90<br />Act</div>
                <div>
                  <h3 className={d.phaseTitle}>Make the move, shape the team</h3>
                  <p>
                    The operating model goes in properly. Roles, rituals, and decision rights
                    become how the company runs rather than a document nobody opens.
                  </p>
                  <p>
                    Hiring gaps get filled or scoped. The first significant strategic bet gets
                    placed. And we set what the next ninety days need to prove.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* HOW ENGAGEMENTS WORK */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How engagements work</h2>
            <div className={d.facts}>

              <div className={d.factRow}>
                <div className={d.factLabel}>Time</div>
                <div className={d.factValue}>
                  One to three days a week, either consecutive or spread across the week. Set
                  in advance so your team knows when I am there and can plan around it.
                </div>
              </div>

              <div className={d.factRow}>
                <div className={d.factLabel}>Length</div>
                <div className={d.factValue}>
                  Three months minimum. Beyond that it depends entirely on need. Some
                  engagements are a focused stretch through a raise, a launch, or a leadership
                  gap. Others run longer because the company keeps growing into the role. We
                  review it as we go rather than fixing a number at the start.
                </div>
              </div>

              <div className={d.factRow}>
                <div className={d.factLabel}>How I work</div>
                <div className={d.factValue}>
                  Embedded, not advisory. I am on the leadership team, in the standups, in the
                  hard conversations, and named to the company as the person who owns product.
                  That is the whole point.
                </div>
              </div>

              <div className={d.factRow}>
                <div className={d.factLabel}>Accountability</div>
                <div className={d.factValue}>
                  I take ownership of product leadership and I am accountable for whether the
                  initiatives succeed. Unlike a consultant, I am still there when the results
                  land.
                </div>
              </div>

              <div className={d.factRow}>
                <div className={d.factLabel}>Where</div>
                <div className={d.factValue}>
                  Remote first, based in Cardiff. On site for kickoff, planning, offsites, and
                  anything that needs a room.
                </div>
              </div>

              <div className={d.factRow}>
                <div className={d.factLabel}>Ending it</div>
                <div className={d.factValue}>
                  Planned, not abrupt. Either I hand over to a full-time hire I helped you
                  find, or the function has matured enough that it no longer needs me. Both
                  are good outcomes.
                </div>
              </div>

              <div className={d.factRow}>
                <div className={d.factLabel}>Availability</div>
                <div className={d.factValue}>
                  Currently fractional CPTO at a travel startup. Open to one additional
                  engagement.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT THIS IS NOT */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What this is not</h2>
            <div className={styles.prose}>
              <p>
                Not staff augmentation. I am not a contract PM picking up tickets. If you
                need delivery capacity, hire delivery capacity.
              </p>
              <p>
                Not a strategy engagement with a report at the end. I stay long enough to be
                accountable for whether the strategy works.
              </p>
              <p>
                And if you need a full-time CPO and can afford one, hire one. I will help you
                write the role and sit on the panel. Fractional is the right answer for a
                particular stage, not for every stage.
              </p>
            </div>
          </div>
        </section>

        {/* WHY ME */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Why me</h2>
            <div className={d.credStrip}>
              <div className={d.credItem}>
                <p className={d.credNumber}>25</p>
                <p className={d.credLabel}>
                  Years in tech, leading product and engineering at Amazon, Expedia, and two
                  Sequoia-backed startups. Twice a CPTO, running product, design, and
                  engineering at the same time.
                </p>
              </div>
              <div className={d.credItem}>
                <p className={d.credNumber}>PCC</p>
                <p className={d.credLabel}>
                  ICF-credentialed coach with around 1,500 hours. I can fix the operating
                  model and develop the people running it in the same engagement.
                </p>
              </div>
              <div className={d.credItem}>
                <p className={d.credNumber}>Hands on</p>
                <p className={d.credLabel}>
                  I still ship full-stack applications myself. That keeps me technically
                  grounded rather than commenting on engineering from a distance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SIBLING */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <a href="/product-due-diligence" className={d.siblingLink}>
              <p className={d.siblingEyebrow}>Also for investors</p>
              <p className={d.siblingTitle}>Product due diligence for VCs and PEs →</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Want to talk it through?</h2>
            <p>
              Most good engagements start with a conversation about what is actually going
              on. No pitch, no proposal until we both think it fits.
            </p>
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
