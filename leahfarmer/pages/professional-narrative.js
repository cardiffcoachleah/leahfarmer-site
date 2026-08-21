import Head from 'next/head'
import styles from '../styles/Narrative.module.css'

const CALENDLY = 'https://calendly.com/lfcoaching/free-discovery-call'

const STEPS = [
  {
    href: '/professional-narrative/working-genius',
    title: 'Working Genius and your problem statement',
    body: 'We start with where your energy actually goes. You take the Six Types of Working Genius assessment, I walk you through what your results mean, and we name the thing you are trying to solve. That problem statement is the thread we pull all the way through.'
  },
  {
    href: '/professional-narrative/cv-walkthrough',
    title: 'The CV walkthrough',
    body: 'We go through your career one role at a time. Not what the job was, but what you were proudest of, what you would never do again, and what you took with you. This is where your stories come from later.'
  },
  {
    href: '/professional-narrative/values',
    title: 'The values exercise',
    body: 'One of the three questions your narrative answers is what you value. This is how you answer it. You work through a long list over a few days and narrow to the three to five you would not trade away, then we go looking for where each one came from.'
  },
  {
    href: '/professional-narrative/five-ps',
    title: 'The 5 Ps',
    body: 'Purpose, People, Passion, Progression, Pay. Five things a job has to give you, and the honest question of which ones you can live without right now.'
  },
  {
    href: '/professional-narrative/the-draft',
    title: 'Your first draft',
    body: 'You write it. I read it, mark it up, and we work through it together until it sounds like you. Then we practice saying it out loud, because the spoken version is a different animal from the written one.'
  },
  {
    href: '/professional-narrative/story-map',
    title: 'The story map',
    body: 'I build a set of interview questions from your narrative, not from a generic bank. Then we work out which of your stories answer them, so you walk into interviews with the material already banked.'
  }
]

export default function ProfessionalNarrative() {
  return (
    <>
      <Head>
        <title>The Professional Narrative — Leah Farmer</title>
        <meta name="description" content="A framework for getting clear on what you have done, what you value, and what you want next." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/professional-narrative" />
      </Head>

      <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label="Leah Farmer Coaching and Advisory, back to homepage">
          <img src="/logo.png" alt="Leah Farmer Coaching &amp; Advisory" className={styles.logoImg} />
        </a>
      </header>

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <p className={styles.eyebrow}>A framework I use with clients</p>
            <h1 className={styles.pageTitle}>
              The <em>Professional Narrative</em>
            </h1>
            <p className={styles.heroLede}>
              The coherent story of who you are, what you value, and what you want next.
              Not a resume. Not a bio. The thing you reach for in interviews, in networking
              conversations, in coffee chats, in cover letters, and on the days you are trying
              to work out whether a role is actually right for you.
            </p>
          </div>
        </section>

        {/* THE THREE QUESTIONS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>It comes down to three questions</h2>
            <div className={styles.pillars}>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>What I have done</h3>
                <p className={styles.pillarBody}>
                  Your impact and what you are known for. Not a timeline of roles. What you
                  have built, what you have learned, and what you carry with you.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>What I value</h3>
                <p className={styles.pillarBody}>
                  The qualities that guide your decisions and shape how you lead. Not the
                  words a company puts on a wall. The ones that show up in what you have
                  walked away from.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>What I want</h3>
                <p className={styles.pillarBody}>
                  Your direction. What draws you, what environment brings you alive, and what
                  contribution looks like in the next chapter. Specific enough that it rules
                  some things out.
                </p>
              </div>

            </div>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                Answered properly, those three fit on a single page. Getting to that page is
                the work.
              </p>
            </div>
          </div>
        </section>

        {/* YOU WRITE IT */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>You write it, not me</h2>
            <div className={styles.callout}>
              <p>
                The first person you are writing this for is you. If you do not believe it,
                nobody else will either.
              </p>
              <p>
                So I will not hand you a polished paragraph about yourself. You would read it,
                nod, and feel nothing. My job is to ask the questions, reflect back what I
                heard, and tell you when a sentence sounds like someone else. Your job is to
                wrestle it out of yourself.
              </p>
              <p className={styles.calloutEmphasis}>
                That is the part that makes it work when you say it out loud to a stranger.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE GET THERE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How we get there</h2>
            <div className={styles.steps}>
              {STEPS.map((step, i) => (
                <a key={step.href} href={step.href} className={`${styles.step} ${styles.stepLink}`}>
                  <div className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepBody}>{step.body}</p>
                    <p className={styles.stepMore}>Read more</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HOW LONG */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>How long it takes</h2>
            <div className={styles.prose}>
              <p>
                Usually about six sessions to do it properly. The CV walkthrough is the part
                that stretches, since it depends on how long your career is and where you want
                to stop and dig.
              </p>
              <p>
                You can start with four. By the time we are through the 5 Ps you will know
                whether you want to keep going. Most people do.
              </p>
              <p>
                Two pieces of it you do on your own. The{' '}
                <a href="/professional-narrative/values" style={{ color: '#0EB2CD' }}>values
                exercise</a> takes a few days of thinking rather than a session, and you write
                the first draft of the narrative before we look at it together. Both come back
                into the room afterward.
              </p>
              <p className={styles.proseEmphasis}>
                If you get stuck on the bigger question of what you are even good at, we can
                take a detour through Ikigai. That sits outside the six and usually takes two
                sessions of its own.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU DO WITH IT */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>What you do with it afterward</h2>
            <ul className={styles.dashList}>
              <li><strong>Interviews.</strong> You stop assembling an answer on the spot and start drawing on something you already believe.</li>
              <li><strong>Networking and coffee chats.</strong> A thirty second version that does not sound rehearsed.</li>
              <li><strong>Cover letters.</strong> The opening paragraph writes itself once you know what you are actually claiming.</li>
              <li><strong>Your CV and LinkedIn.</strong> Both get sharper when there is a point of view underneath them.</li>
              <li><strong>Deciding.</strong> When a role comes up, you have something concrete to hold it against.</li>
            </ul>
            <div className={styles.prose} style={{ marginTop: '2rem' }}>
              <p>
                It also goes stale. Come back to it in two years and you will see how much has
                moved, which is usually more interesting than the document itself.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.sectionLast}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitleTeal}>Where to start</h2>
            <a href={CALENDLY} className={styles.button} target="_blank" rel="noopener">
              Book a discovery call
            </a>
            <p className={styles.ctaNote}>
              People come to this from different directions. Some are job hunting. Some feel
              stuck and cannot name why. Some are trying to move from engineering into product,
              or from doing the work into leading it. The starting point is the same
              conversation either way. Email{' '}
              <a href="mailto:leah@leahfarmer.com">leah@leahfarmer.com</a> if you would rather
              ask something first.
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            © Leah Farmer · Cardiff, Wales · <a href="/">leahfarmer.com</a> ·{' '}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </footer>

      </main>
    </>
  )
}
