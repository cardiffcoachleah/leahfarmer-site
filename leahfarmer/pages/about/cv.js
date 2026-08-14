import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from '../../styles/Subpage.module.css'

const CALENDLY = 'https://calendly.com/lfcoaching/free-discovery-call'

export default function CV() {
  return (
    <>
      <Head>
        <title>CV — Leah Farmer</title>
        <meta name="description" content="Twenty-five years in product and technology leadership. CPTO, VP Product, and ICF PCC executive coach. Amazon, Expedia, Klarna, Tourlane, Google, and TravelLocal." />
        <link rel="canonical" href="https://www.leahfarmer.com/about/cv" />
        <meta property="og:title" content="CV — Leah Farmer" />
        <meta property="og:description" content="Twenty-five years in product and technology leadership. CPTO, VP Product, and ICF PCC executive coach." />
        <meta property="og:image" content="https://www.leahfarmer.com/headshot.png" />
        <meta property="og:url" content="https://www.leahfarmer.com/about/cv" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CV — Leah Farmer" />
        <meta name="twitter:description" content="Twenty-five years in product and technology leadership." />
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
                <p className={styles.eyebrow}>Curriculum Vitae</p>
                <h1 className={styles.pageTitle}>Leah Farmer</h1>
              </div>
              <div className={styles.heroActions}>
                <a href="/LeahFarmer-CV.pdf" className={styles.ghostButton} target="_blank" rel="noopener">
                  Download PDF →
                </a>
                <a href="https://linkedin.com/in/leahfarmer" className={styles.ghostButton} target="_blank" rel="noopener">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.intro}>
              CPTO · ICF Professional Certified Coach (PCC) · Executive &amp; Leadership Coach
            </p>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                I am a seasoned product and technology executive with 25 years of senior
                leadership across Amazon, Expedia, and Sequoia-backed Klarna and Tourlane,
                and a credentialed coach with an ICF PCC and around 1,500 coaching hours.
              </p>
              <p>
                For the past four years I have run my own coaching practice, working with
                executives, founders, and high-potential leaders in tech across the US,
                Europe, and AsiaPac. As a two-time CPTO I have led product, design, and
                engineering simultaneously, which lets me coach leaders across all three
                disciplines with first-hand credibility.
              </p>
              <p>
                I combine deep operational experience with a neuroscience-informed, somatic
                coaching approach. I also build: using AI-assisted development tools I
                independently ship full-stack applications and agentic workflows, which keeps
                me technically grounded as a technology leader.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Expertise</h2>
            <div className={styles.skillCols}>

              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Product &amp; Innovation</h3>
                <ul className={styles.skillList}>
                  <li>Product vision and strategy</li>
                  <li>Travel and marketplace platforms</li>
                  <li>Embedded payments and fintech</li>
                  <li>Fundraising and investor narrative</li>
                  <li>Digital transformation and scale</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Leadership &amp; Engineering</h3>
                <ul className={styles.skillList}>
                  <li>CPTO and C-suite leadership</li>
                  <li>Engineering team leadership</li>
                  <li>Operating models for high-impact teams</li>
                  <li>Cross-functional alignment</li>
                  <li>AI strategy, innovation, and implementation</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Coaching &amp; Culture</h3>
                <ul className={styles.skillList}>
                  <li>Executive coaching (ICF PCC)</li>
                  <li>Around 1,500 coaching hours</li>
                  <li>Burnout recovery and resilience</li>
                  <li>Team development and psychological safety</li>
                  <li>Neuroscience-informed practice</li>
                </ul>
              </div>

            </div>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>Build stack.</strong>{' '}
                Next.js, React, TypeScript, Python, Supabase, Vercel, Resend. Working daily
                with Claude and the Anthropic API including MCP, plus ChatGPT, Gemini, GitHub
                Copilot, and Cursor.
              </p>
            </div>
          </div>
        </section>

        {/* COACHING PRACTICE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Coaching practice</h2>
            <div className={styles.roles}>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Leah Farmer Coaching &amp; Advisory</p>
                  <p className={styles.roleDates}>January 2021 – Present</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Founder · ICF PCC Executive &amp; Leadership Coach</p>
                  <p className={styles.roleBody}>
                    Founded to serve product and technology leaders navigating high-stakes
                    transitions, burnout, and growth. Clients include C-suite executives, VPs,
                    and founders across fintech, healthtech, and travel.
                  </p>
                  <ul className={styles.roleList}>
                    <li>Coach product and technology leaders across the US, Europe, and AsiaPac on team alignment, communication, and executive presence.</li>
                    <li>Design and deliver bespoke internal coaching programs blending group and individual coaching for high-performing teams.</li>
                    <li>Developed Beyond Burnout, a structured program helping leaders and teams build sustainable success strategies.</li>
                    <li>Created The Co-Founder Connection, helping co-founder pairs strengthen relationships and shared leadership frameworks.</li>
                    <li>Embedded on-demand coaching for companies including Synera, PPro, and Castles.</li>
                    <li>Notable clients include leaders at EA Sports, GitHub, Amazon, Klarna, Google, Adyen, Decathlon, SAP, and Spotify, plus startups across Silicon Valley and Europe.</li>
                    <li>Delivered product and organizational strategic assessments for UK-based investment firms and VCs, evaluating portfolio company product maturity, team structure, and AI readiness.</li>
                    <li>Advised two UK tech startups on AI strategy, integrating AI capability into product roadmaps and go-to-market positioning.</li>
                    <li>Built a multi-agent AI content operations system for the practice, setting content strategy across LinkedIn, Substack, Instagram, and Mailchimp.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INDEPENDENT BUILDS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Independent AI builds</h2>
            <div className={styles.prose}>
              <p>
                Full-stack consumer and coaching tools built end to end using AI-assisted
                development. All conceived, architected, and shipped independently: Need a Pep
                Talk, The 13th Stage, Wild 369, The Launch by Leah, and Wren &amp; Roots.
              </p>
              <p>
                <a href="/about/what-im-building" style={{ color: '#0EB2CD', borderBottom: '1px solid rgba(14,178,205,0.3)' }}>
                  See what I&apos;m building →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* EXECUTIVE EXPERIENCE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Executive leadership experience</h2>
            <div className={styles.roles}>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>TravelLocal</p>
                  <p className={styles.roleDates}>December 2024 – Present</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Fractional Chief Product &amp; Technology Officer</p>
                  <p className={styles.roleBody}>
                    VC-backed travel tech scaleup. Brought in to lead Product and Design;
                    remit expanded to include Engineering leadership in February 2025. Partner
                    closely with the CEO and CFO on growth, conversion, and fundraising.
                  </p>
                  <ul className={styles.roleList}>
                    <li>Introduced a new product operating model including team charters, rituals, and cross-functional ownership.</li>
                    <li>Recruited and onboarded product managers and designers, increasing capacity and strategic clarity.</li>
                    <li>Created the customer experience vision and strategic framework, anchoring development to conversion and satisfaction metrics.</li>
                    <li>Led the engineering leadership transition, defining delivery processes and building psychological safety and velocity.</li>
                    <li>Developed and led the company-wide AI strategy and innovation roadmap, including a company-wide AI hackathon.</li>
                    <li>Built Destination Pulse, an internal AI-powered tool integrating live flight pricing and Google Trends APIs to surface demand signals.</li>
                    <li>Built a custom MCP server in TypeScript connecting Claude to the internal communication platform, enabling AI-assisted workflows.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Yabie</p>
                  <p className={styles.roleDates}>December 2021 – December 2023</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Director, Board of Directors (Non-Executive)</p>
                  <p className={styles.roleBody}>
                    Strategic oversight on product innovation, technology scaling, and
                    leadership development for a fast-scaling SaaS fintech across Scandinavia.
                  </p>
                  <ul className={styles.roleList}>
                    <li>Advised on scaling the SaaS-based POS systems, contributing to a 326% revenue increase between 2021 and 2022.</li>
                    <li>Supported key acquisitions including Cashit AB and Yabie Norway AS as part of a Scandinavian expansion strategy.</li>
                    <li>Coached and mentored the leadership team on team dynamics and decision-making.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Google</p>
                  <p className={styles.roleDates}>January 2023 – May 2023</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Director, Product Management – Commerce</p>
                  <p className={styles.roleBody}>
                    Led cross-functional product teams within the Commerce business unit,
                    defining the Unified Merchant Identity strategy. The role was significantly
                    descoped following large-scale restructuring, and I resigned to pursue more
                    aligned opportunities.
                  </p>
                  <ul className={styles.roleList}>
                    <li>Led UMI strategy development to create a more integrated merchant experience.</li>
                    <li>Created tighter alignment between product, design, and engineering at director level.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Tourlane</p>
                  <p className={styles.roleDates}>February 2020 – December 2022</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Chief Product &amp; Technology Officer</p>
                  <p className={styles.roleBody}>
                    Led product, design, and engineering through a critical growth phase
                    including the global pandemic, managing a cross-functional team across
                    multiple offices.
                  </p>
                  <ul className={styles.roleList}>
                    <li>Spearheaded a successful $20M Series C extension, total raised $67M, partnering with the CEO and CFO on investor narrative.</li>
                    <li>Led the tech team to deliver 10 to 15 features per quarter, improving conversion, satisfaction, and operational efficiency.</li>
                    <li>Built and scaled engineering and product teams, defining hiring frameworks and leadership principles.</li>
                    <li>Introduced data-driven travel planning tools across 50+ global destinations.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Klarna</p>
                  <p className={styles.roleDates}>November 2017 – January 2020</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>VP Product Management &amp; GM, Merchant Services</p>
                  <p className={styles.roleBody}>
                    Led the Merchant Services domain, overseeing 15 teams and 120+ people
                    across product, engineering, and design.
                  </p>
                  <ul className={styles.roleList}>
                    <li>Drove a 300% increase in SMB merchant sign-ups; expanded relationships with H&amp;M, ASOS, Samsung, and AliExpress.</li>
                    <li>Oversaw the expansion of the Berlin Tech Hub, scaling merchant product development across Europe and the US.</li>
                    <li>Developed Klarna&apos;s PM operating model and authored the Klarna PM 101 Book as a foundation for internal knowledge culture.</li>
                    <li>Built and led a cross-functional leadership team across product, engineering, and design in a hypergrowth environment.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Providence Health &amp; Services</p>
                  <p className={styles.roleDates}>May 2016 – November 2017</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Senior Director, Technical Product Management</p>
                  <ul className={styles.roleList}>
                    <li>Directed creation of the Express Care at Home mobile app, enabling on-demand provider house calls.</li>
                    <li>Led the launch of Providence Express Care Virtual, a telehealth platform expanding care across a multi-state service area.</li>
                    <li>Developed the DIG Leadership Principles and implemented PM writing culture and best practices.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Expedia</p>
                  <p className={styles.roleDates}>June 2015 – May 2016</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Director of Strategy &amp; Principal Technical Advisor</p>
                  <ul className={styles.roleList}>
                    <li>Led cross-functional architecture teams aligning product, engineering, and design across core transaction services.</li>
                    <li>Spearheaded a hackathon program that accelerated migration of services to cloud infrastructure.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.role}>
                <div className={styles.roleMeta}>
                  <p className={styles.roleCompany}>Amazon</p>
                  <p className={styles.roleDates}>May 2012 – May 2015</p>
                </div>
                <div>
                  <p className={styles.roleTitle}>Senior Technical Product Manager – Global Payments Services</p>
                  <ul className={styles.roleList}>
                    <li>Led product management for core transaction services handling 1B+ transactions a month, including payment tokenization and routing architecture.</li>
                    <li>Led development and launch of the global invoicing platform for Amazon Business: $1B in sales in year one, $10B+ in year two.</li>
                    <li>Drove card-present payment processing capabilities, expanding in-person payment reach.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EARLIER CAREER */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Earlier career</h2>

            <div className={styles.earlyRow}>
              <span className={styles.earlyCompany}>IP Commerce</span>
              <span className={styles.earlyRole}>Senior Product Manager, PaaS &amp; Value Added Services</span>
              <span className={styles.earlyDates}>2011–2012</span>
            </div>
            <div className={styles.earlyRow}>
              <span className={styles.earlyCompany}>LAF Consulting</span>
              <span className={styles.earlyRole}>Independent Consultant – Fintech, Retail &amp; Nonprofit</span>
              <span className={styles.earlyDates}>2009–2012</span>
            </div>
            <div className={styles.earlyRow}>
              <span className={styles.earlyCompany}>Infonox (TSYS)</span>
              <span className={styles.earlyRole}>Senior Technical Program Manager &amp; Solution Architect</span>
              <span className={styles.earlyDates}>2007–2010</span>
            </div>
            <div className={styles.earlyRow}>
              <span className={styles.earlyCompany}>Electronic Clearing House</span>
              <span className={styles.earlyRole}>Product Manager, ACH &amp; Collections</span>
              <span className={styles.earlyDates}>2003–2007</span>
            </div>
            <div className={styles.earlyRow}>
              <span className={styles.earlyCompany}>Accounting &amp; controller roles</span>
              <span className={styles.earlyRole}>Foundation in business operations and financial analysis</span>
              <span className={styles.earlyDates}>1997–2003</span>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Education</h2>
            <div className={styles.credGrid}>
              <div className={styles.credRow}>
                <p className={styles.credName}>MA, Organizational Leadership &amp; Change Management</p>
                <p className={styles.credIssuer}>Gonzaga University · 2021 · Summa cum laude, GPA 4.0</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>MBA, Technology Management</p>
                <p className={styles.credIssuer}>University of Phoenix · 2004 · Summa cum laude, GPA 4.0</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>BBA, Accounting</p>
                <p className={styles.credIssuer}>Freed Hardeman University · 1997 · Cum laude, GPA 3.5</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Certifications</h2>
            <div className={styles.credGrid}>
              <div className={styles.credRow}>
                <p className={styles.credName}>Professional Certified Coach (PCC)</p>
                <p className={styles.credIssuer}>International Coaching Federation · January 2023</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Certified Life Coach</p>
                <p className={styles.credIssuer}>Martha Beck, Inc. · December 2023</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Certified Menopause Coaching Specialist</p>
                <p className={styles.credIssuer}>GGS, Inc. · June 2024</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Six Types of Working Genius Facilitator</p>
                <p className={styles.credIssuer}>The Table Group · Summer 2023</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Pillars of Neuroscience for Coaches</p>
                <p className={styles.credIssuer}>Academy of Neuroscience &amp; Education · June 2023</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Certified OKR Practitioner, Level 2</p>
                <p className={styles.credIssuer}>OKR International · December 2023</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Certified Scrum Product Owner &amp; Scrum Master</p>
                <p className={styles.credIssuer}>Scrum Alliance · March 2014</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Mindfulness Certification</p>
                <p className={styles.credIssuer}>Yoga Renew · July 2023</p>
              </div>
              <div className={styles.credRow}>
                <p className={styles.credName}>Second Degree Reiki Practitioner</p>
                <p className={styles.credIssuer}>Sammasati School of Reiki · January 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Other distinctions</h2>
            <div className={styles.prose}>
              <p>
                <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>Founder advisor and angel investor</strong>{' '}
                since 2023. Strategic advisory to founders on product strategy, team design,
                and fundraising narrative.
              </p>
              <p>
                <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>Podcaster</strong> since
                2024. Host of One Question, a weekly solo show.
              </p>
              <p>
                <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>Writer</strong> since
                2020. Publishing on Substack at Notes in the Margins and on Medium, exploring
                leadership, burnout, AI, and personal growth.
              </p>
              <p>
                <strong style={{ color: '#FFFFFF', fontWeight: 500 }}>CMO Circle speaker</strong>,
                July 2026. Co-presenting &quot;When Everyone&apos;s a Builder: How Product,
                Engineering, and Marketing Work Together in the Age of AI.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Want to talk?</h2>
            <p>Coaching, fractional leadership, or product due diligence. Start with a conversation.</p>
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
