import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'
import d from '../styles/Deep.module.css'

const CALENDLY = 'https://calendly.com/lfcoaching/free-discovery-call'

export default function ProductDueDiligence() {
  return (
    <>
      <Head>
        <title>Product Due Diligence for VCs and PEs — Leah Farmer</title>
        <meta name="description" content="Product due diligence for VCs, PEs, and boards. A six-lens assessment of product strategy, customer understanding, team, tech alignment, and metrics. Scoped to the deal, on retainer or per assessment." />
        <link rel="canonical" href="https://www.leahfarmer.com/product-due-diligence" />
        <meta property="og:title" content="Product Due Diligence for VCs and PEs — Leah Farmer" />
        <meta property="og:description" content="Founders dream the vision. Product builds the reality. An operator's read on the product, the team, and the roadmap." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/product-due-diligence" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Due Diligence for VCs and PEs — Leah Farmer" />
        <meta name="twitter:description" content="Founders dream the vision. Product builds the reality." />
        <meta name="twitter:image" content="https://www.leahfarmer.com/headshot.png" />
      </Head>

      <Nav />

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <div className={styles.pageHeroRow}>
              <div>
                <p className={styles.eyebrow}>Product Due Diligence</p>
                <h1 className={styles.pageTitle}>
                  Founders dream the vision.<br />Product builds the reality.
                </h1>
              </div>
              <a href={CALENDLY} className={styles.heroCtaRound} target="_blank" rel="noopener">
                Let&apos;s<br />talk
              </a>
            </div>
          </div>
        </section>

        {/* THE GAP */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.prose}>
              <p>
                For VCs, PEs, and boards. Technical due diligence tells you if the
                architecture is sound. Product due diligence tells you if the company is
                building the right thing, and that question does not get asked nearly
                enough.
              </p>
              <p>
                Founders present a captivating vision. Without strong product foundations
                underneath it, that vision becomes inefficient use of capital and lost
                market opportunity. Product managers are the people who turn a vision into
                an actionable plan, and their role is routinely underestimated or brought
                into the conversation too late.
              </p>
              <p>
                While your CTO advisor looks at the code and the infrastructure, I am
                looking at the roadmap, the customer understanding, the product strategy,
                and whether the person leading it can operate at the next stage.
              </p>
              <p>
                It is not a replacement for technical due diligence. It is what sits
                alongside it.
              </p>
            </div>
          </div>
        </section>

        {/* SIX LENSES */}
        <section className={styles.section}>
          <div className={styles.pillarsWrap}>
            <h2 className={styles.sectionTitleTeal}>The six-lens assessment</h2>
            <div className={styles.pillars}>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Strategy and vision</h3>
                <p>
                  Whether there is a clear product vision, and whether the roadmap is tied to
                  measurable outcomes rather than to whoever asked loudest.
                </p>
                <ul className={d.lensQuestions}>
                  <li>Is there a clear product vision?</li>
                  <li>Is the roadmap tied to measurable outcomes?</li>
                  <li>How easily can the team pivot as the landscape shifts?</li>
                </ul>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Business understanding</h3>
                <p>
                  Whether product understands the business model and builds to support it,
                  and where the company actually sits in its growth journey.
                </p>
                <ul className={d.lensQuestions}>
                  <li>How does product impact key growth metrics?</li>
                  <li>Pre-PMF, scaling, or platform expansion?</li>
                </ul>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Customer understanding</h3>
                <p>
                  Whether product is genuinely connected to the customer and can speak on
                  their behalf with confidence. I look for evidence, not conviction.
                </p>
                <ul className={d.lensQuestions}>
                  <li>How does the team gather insights?</li>
                  <li>Does product have direct customer access?</li>
                  <li>What is the research, test, build, measure cycle?</li>
                </ul>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Team and talent</h3>
                <p>
                  Who is in charge of product, and whether the behaviors of product
                  management live somewhere even when nobody carries the title.
                </p>
                <ul className={d.lensQuestions}>
                  <li>How do product, engineering, and design collaborate?</li>
                  <li>Are PMs empowered to say no and drive outcomes?</li>
                  <li>Who owns the trade-off decisions?</li>
                </ul>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Technology alignment</h3>
                <p>
                  Whether the stack supports the product strategy or constrains it, and
                  whether engineering and product are speaking the same language.
                </p>
                <ul className={d.lensQuestions}>
                  <li>Is the stack scalable against the strategy?</li>
                  <li>Can the team ship consistently and respond to change?</li>
                  <li>Are commitments made together or in silos?</li>
                </ul>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Metrics and results</h3>
                <p>
                  Whether data drives outcome-oriented behavior, or whether the numbers get
                  reported after the fact and never change a decision.
                </p>
                <ul className={d.lensQuestions}>
                  <li>Are engagement, retention, and activation in the decisions?</li>
                  <li>Do tech health metrics factor into build trade-offs?</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* RED AND GREEN FLAGS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What I am looking for</h2>
            <div className={d.twoCol}>

              <div className={d.colCard}>
                <h3 className={d.colTitle}>Red flags</h3>
                <ul className={d.dashList}>
                  <li><strong>No dedicated PMs.</strong> Missed objectives, no clear accountability.</li>
                  <li><strong>PM by committee.</strong> Fragmented decisions, opaque prioritization.</li>
                  <li><strong>Founder or sales driven.</strong> Direction set by pressure, not customer insight.</li>
                  <li><strong>Disconnected metrics.</strong> Numbers that do not track customer behavior.</li>
                  <li><strong>Feature-driven roadmap.</strong> Output measured instead of outcomes.</li>
                  <li><strong>Leadership turnover.</strong> Broken continuity in product and tech.</li>
                </ul>
              </div>

              <div className={d.colCard}>
                <h3 className={d.colTitleGreen}>Green flags</h3>
                <ul className={`${d.dashList} ${d.dashListGreen}`}>
                  <li><strong>Clear product vision.</strong> Guides decisions and resource allocation.</li>
                  <li><strong>Empowered product managers.</strong> Discovery and delivery skills, real authority.</li>
                  <li><strong>Collaborative culture.</strong> Product, tech, and design working as equals.</li>
                  <li><strong>Leadership values experimentation.</strong> Teams can test, learn, and be wrong.</li>
                  <li><strong>Integrated feedback loops.</strong> Customer input reaches the roadmap systematically.</li>
                  <li><strong>Measurable success metrics.</strong> Meaningful data, not vanity stats.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* HOW IT RUNS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How it runs</h2>
            <div className={styles.prose} style={{ marginBottom: '2.5rem' }}>
              <p>
                Length depends on the deal. A fast read before an investment committee might
                take a week. A full assessment on a larger company with real access to the
                team and customers takes longer. I scope it to your timeline and tell you
                honestly what I can and cannot get to in the time available.
              </p>
              <p>
                Whatever the length, the work moves through the same four stages.
              </p>
            </div>

            <div className={d.phases}>

              <div className={d.phase}>
                <div className={d.phaseMarker}>One<br />Intake</div>
                <div>
                  <h3 className={d.phaseTitle}>Orientation</h3>
                  <p>
                    Review everything available: deck, data room, roadmap documentation, any
                    existing customer research. An independent look at the platform and where
                    the company sits in its competitive landscape. Initial hypotheses formed,
                    interview list and access agreed, structured technology survey sent to the
                    team.
                  </p>
                </div>
              </div>

              <div className={d.phase}>
                <div className={d.phaseMarker}>Two<br />Conversations</div>
                <div>
                  <h3 className={d.phaseTitle}>Assessment</h3>
                  <p>
                    Interviews with founders, engineers, and whoever else you can facilitate. A
                    targeted customer conversation where access allows, since even one call is
                    useful. What I hear gets cross-referenced against what the materials say,
                    and the hypotheses get sharper.
                  </p>
                </div>
              </div>

              <div className={d.phase}>
                <div className={d.phaseMarker}>Three<br />Synthesis</div>
                <div>
                  <h3 className={d.phaseTitle}>Pressure testing</h3>
                  <p>
                    Findings tested against the industry backdrop. Red and green flags
                    identified with supporting rationale. Open questions closed out, and the
                    assessment drafted.
                  </p>
                </div>
              </div>

              <div className={d.phase}>
                <div className={d.phaseMarker}>Four<br />Delivery</div>
                <div>
                  <h3 className={d.phaseTitle}>Assessment and readout</h3>
                  <p>
                    Initial findings can be delivered verbally ahead of your investment
                    committee if the timeline demands it. The written assessment follows,
                    covering product strategy and vision, team capability and fit, technology
                    risk and readiness, and product-market fit signals. Then a readout session
                    to walk through what it means for the investment.
                  </p>
                  <p>
                    Throughout, I share what I learn as I learn it. No surprises at the end.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHERE TECH FITS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Where technology fits</h2>
            <div className={styles.prose}>
              <p>
                Most of the time my product read runs alongside a dedicated technical due
                diligence workstream. That is the ideal setup, and I would rather coordinate
                with a specialist than overlap with them.
              </p>
              <p>
                Where you do not have one, I can cover light technical due diligence at the
                same time. Architecture, delivery capability, build versus buy decisions, and
                key-person concentration. Be aware that this changes the shape of the overall
                assessment, and depending on the stack we may still need specialist expertise
                in specific areas. Where I find gaps that need a deeper look, I flag them
                explicitly rather than paper over them.
              </p>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT MODELS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Working together</h2>
            <div className={d.twoCol}>

              <div className={d.colCard}>
                <h3 className={d.colTitle}>Per assessment</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.8)' }}>
                  A single deal, scoped and priced on its own. Right when you want a product
                  read on something specific and there is no ongoing need.
                </p>
              </div>

              <div className={d.colCard}>
                <h3 className={d.colTitle}>On retainer</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.8)' }}>
                  Available across your pipeline and portfolio. Useful when deals move fast,
                  when you want product perspective before something reaches diligence, or
                  when portfolio companies need a periodic read.
                </p>
              </div>

            </div>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                NDA as standard. I will tell you up front if I have a conflict, and I will not
                take a diligence engagement against a company I have advised.
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
                  Years in tech, 22 of them in product. Amazon, Expedia, and two
                  Sequoia-backed startups. I know what good looks like, and what it looks like
                  when a talented team is building in the wrong direction.
                </p>
              </div>
              <div className={d.credItem}>
                <p className={d.credNumber}>Both</p>
                <p className={d.credLabel}>
                  Operator and coach. ICF PCC credentialed, so I can read a product
                  organization and read the people running it in the same conversation.
                </p>
              </div>
              <div className={d.credItem}>
                <p className={d.credNumber}>Live</p>
                <p className={d.credLabel}>
                  Currently fractional CPTO at a travel startup. Still inside the work, not
                  commenting on it from a distance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SIBLING */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <a href="/fractional-cpo" className={d.siblingLink}>
              <p className={d.siblingEyebrow}>Also for portfolio companies</p>
              <p className={d.siblingTitle}>Fractional CPO and CPTO engagements →</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Have a deal in motion?</h2>
            <p>
              Tell me the shape of it and the timeline you are working to. If a product read
              would not change your decision, I will say so.
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
