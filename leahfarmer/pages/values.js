import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Values.module.css'

const STORAGE_KEY = 'lf-values-exercise-v1'
const EMAIL = 'leah@leahfarmer.com'

const VALUES = [
  'Accountability', 'Achievement', 'Adaptability', 'Adventure', 'Altruism', 'Ambition',
  'Authenticity', 'Balance', 'Beauty', 'Being the Best', 'Belonging', 'Career', 'Caring',
  'Collaboration', 'Commitment', 'Community', 'Compassion', 'Competence', 'Confidence',
  'Connection', 'Contentment', 'Contribution', 'Cooperation', 'Courage', 'Creativity',
  'Curiosity', 'Dignity', 'Diversity', 'Efficiency', 'Energy', 'Environment', 'Equality',
  'Ethics', 'Excellence', 'Fairness', 'Faith', 'Family', 'Financial Stability', 'Forgiveness',
  'Freedom', 'Friendship', 'Fun', 'Future', 'Generosity', 'Giving Back', 'Grace', 'Gratitude',
  'Growth', 'Harmony', 'Health', 'Home', 'Honesty', 'Hope', 'Humility', 'Humor', 'Inclusion',
  'Independence', 'Initiative', 'Integrity', 'Intuition', 'Job Security', 'Joy', 'Justice',
  'Kindness', 'Knowledge', 'Leadership', 'Learning', 'Legacy', 'Leisure', 'Love', 'Loyalty',
  'Making a Difference', 'Nature', 'Openness', 'Optimism', 'Order', 'Parenting', 'Patience',
  'Patriotism', 'Peace', 'Perseverance', 'Personal Fulfillment', 'Power', 'Pride',
  'Recognition', 'Reliability', 'Resourcefulness', 'Respect', 'Responsibility', 'Risk-Taking',
  'Safety', 'Security', 'Self-Discipline', 'Self-Expression', 'Self-Respect', 'Serenity',
  'Service', 'Simplicity', 'Spirituality', 'Sportsmanship', 'Stewardship', 'Success',
  'Teamwork', 'Thrift', 'Time', 'Tradition', 'Travel', 'Trust', 'Truth', 'Understanding',
  'Uniqueness', 'Vision', 'Vitality', 'Vulnerability', 'Wealth', 'Well-Being',
  'Wholeheartedness', 'Wisdom'
]

export default function Values() {
  // One object, updated functionally. Separate useState arrays drop clicks:
  // React batches updates, so rapid clicks all read the same stale array
  // and only the last one survives. Fast clicking is the whole first pass.
  const [data, setData] = useState({ selected: [], final: [], own: [], name: '' })
  const { selected, final, own, name } = data
  const [ownInput, setOwnInput] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [copyLabel, setCopyLabel] = useState('Copy my list')
  const [resetArmed, setResetArmed] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)
  const flashTimer = useRef(null)

  // Load once on mount. Never touch localStorage during render or on the server.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const d = JSON.parse(raw)
        setData({
          selected: Array.isArray(d.selected) ? d.selected : [],
          final: Array.isArray(d.final) ? d.final : [],
          own: Array.isArray(d.own) ? d.own : [],
          name: typeof d.name === 'string' ? d.name : ''
        })
      }
    } catch (e) {
      // Private browsing or storage disabled. The exercise still works, it just will not persist.
    }
    setLoaded(true)
  }, [])

  // Persist on every change, but only after the initial load has run.
  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      setSavedFlash(true)
      clearTimeout(flashTimer.current)
      flashTimer.current = setTimeout(() => setSavedFlash(false), 1400)
    } catch (e) {
      // Nothing to do. Copy, PDF and email all still work from in-memory state.
    }
  }, [data, loaded])

  useEffect(() => () => clearTimeout(flashTimer.current), [])

  const allWords = [...VALUES, ...own]

  // One word, three states: unselected, selected, final. Clicking cycles through them.
  function toggle(word) {
    setData(d => {
      if (d.final.includes(word)) {
        return {
          ...d,
          final: d.final.filter(w => w !== word),
          selected: d.selected.filter(w => w !== word)
        }
      }
      if (d.selected.includes(word)) {
        return { ...d, final: [...d.final, word] }
      }
      return { ...d, selected: [...d.selected, word] }
    })
  }

  function remove(word) {
    setData(d => ({
      ...d,
      selected: d.selected.filter(w => w !== word),
      final: d.final.filter(w => w !== word)
    }))
  }

  function addOwn() {
    const v = ownInput.trim()
    if (!v) return
    setData(d => {
      const existing = [...VALUES, ...d.own]
      if (existing.some(w => w.toLowerCase() === v.toLowerCase())) return d
      return { ...d, own: [...d.own, v], selected: [...d.selected, v] }
    })
    setOwnInput('')
  }

  function setName(value) {
    setData(d => ({ ...d, name: value }))
  }

  const finalSorted = [...final].sort()
  const restSorted = selected.filter(w => !final.includes(w)).sort()

  const chipOrder = [...selected].sort((a, b) => {
    const fa = final.includes(a)
    const fb = final.includes(b)
    if (fa !== fb) return fa ? -1 : 1
    return a.localeCompare(b)
  })

  function plainText() {
    let out = ''
    if (finalSorted.length) out += 'Final values: ' + finalSorted.join(', ') + '\n\n'
    if (restSorted.length) out += 'Still on the list: ' + restSorted.join(', ')
    return out || '(nothing selected yet)'
  }

  function handleCopy() {
    navigator.clipboard.writeText(plainText())
      .then(() => setCopyLabel('Copied'))
      .catch(() => setCopyLabel('Copy failed'))
    setTimeout(() => setCopyLabel('Copy my list'), 1600)
  }

  function handleEmail() {
    const who = name ? name + ' — ' : ''
    const subject = encodeURIComponent(who + 'Values exercise')
    const body = encodeURIComponent(plainText() + '\n\n')
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  function handleReset() {
    if (resetArmed) {
      setData(d => ({ selected: [], final: [], own: [], name: d.name }))
      setResetArmed(false)
    } else {
      setResetArmed(true)
      setTimeout(() => setResetArmed(false), 3500)
    }
  }

  const count = selected.length === 0
    ? 'Nothing selected yet'
    : `${selected.length} ${selected.length === 1 ? 'word' : 'words'}` +
      (final.length ? ` · ${final.length} marked final` : '')

  const printDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <>
      <Head>
        <title>Values Exercise — Leah Farmer</title>
        <meta name="description" content="A short exercise to help you name the three to five values you actually work and live by." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.leahfarmer.com/values" />
      </Head>

      <div className={styles.screen}>

        <header className={styles.header}>
          <a href="/" className={styles.logo} aria-label="Leah Farmer Coaching and Advisory, back to homepage">
            <img src="/logo.png" alt="Leah Farmer Coaching &amp; Advisory" className={styles.logoImg} />
          </a>
        </header>

        <main className={styles.main}>

          {/* HERO */}
          <section className={styles.pageHero}>
            <div className={styles.pageHeroInner}>
              <p className={styles.eyebrow}>A short exercise</p>
              <h1 className={styles.pageTitle}>
                What do you <em>actually</em> value?
              </h1>
              <p className={styles.heroLede}>
                Your values are the things you will not trade away. They show up in what you
                have walked out on, what you have defended, and what you keep coming back to.
                Naming three to five of them gives you something concrete to test decisions
                against, at work and everywhere else.
              </p>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <h2 className={styles.sectionTitleTeal}>How this works</h2>
              <ul className={styles.dashList}>
                <li>
                  <strong>First pass.</strong> Click anything that stands out. Do not think hard
                  about it and do not filter. If a word catches, click it. Then close this and
                  walk away for at least an hour.
                </li>
                <li>
                  <strong>Second pass.</strong> Come back and start cutting. Where two words are
                  saying the same thing, keep the one that sounds more like you. Walk away again.
                </li>
                <li>
                  <strong>Third pass and beyond.</strong> Narrow down to three to five. Click a
                  word you have already selected a second time to mark it final. Click it once
                  more to drop it entirely.
                </li>
              </ul>
              <p className={styles.note}>
                Doing this over a few days rather than in one sitting is the whole point. The
                words you still want on Thursday are the real ones.
              </p>
            </div>
          </section>

          {/* PRIVACY / SAVING */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <h2 className={styles.sectionTitleTeal}>Where your answers go</h2>
              <div className={styles.callout}>
                <p>
                  Your selections save in this browser as you click, so you can close this page
                  and come back to it tomorrow. Nothing is sent anywhere and nobody else can see
                  it, including me.
                </p>
                <p>
                  That also means your work lives on this device only. If you switch from your
                  laptop to your phone, or clear your browsing data, it will not follow you.
                </p>
                <p className={styles.calloutEmphasis}>
                  When you are done, save it as a PDF or email it to me. Otherwise I will not see it.
                </p>
              </div>
            </div>
          </section>

          {/* THE EXERCISE */}
          <section className={styles.sectionLast}>
            <div className={styles.sectionInner}>
              <h2 className={styles.sectionTitleTeal}>The list</h2>

              <div className={styles.layout}>
                <div>
                  <div className={styles.grid}>
                    {allWords.map(word => {
                      const isFinal = final.includes(word)
                      const isOn = selected.includes(word)
                      const cls = [
                        styles.word,
                        isFinal ? styles.wordFinal : (isOn ? styles.wordOn : '')
                      ].join(' ')
                      return (
                        <button
                          key={word}
                          type="button"
                          className={cls}
                          onClick={() => toggle(word)}
                          aria-pressed={isOn}
                        >
                          {word}
                        </button>
                      )
                    })}
                  </div>

                  <div className={styles.ownBlock}>
                    <label className={styles.fieldLabel} htmlFor="ownInput">Add your own</label>
                    <div className={styles.ownRow}>
                      <input
                        id="ownInput"
                        type="text"
                        className={styles.textInput}
                        placeholder="A word that is missing"
                        maxLength={40}
                        value={ownInput}
                        onChange={e => setOwnInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addOwn() } }}
                      />
                      <button type="button" className={styles.addBtn} onClick={addOwn}>Add</button>
                    </div>
                  </div>
                </div>

                {/* SHORTLIST PANEL */}
                <aside className={styles.panel}>
                  <h3 className={styles.panelTitle}>Your shortlist</h3>
                  <p className={styles.count}>{count}</p>

                  <div className={styles.chips}>
                    {chipOrder.length === 0 ? (
                      <span className={styles.empty}>Click words to build your list.</span>
                    ) : chipOrder.map(word => (
                      <button
                        key={word}
                        type="button"
                        title="Remove"
                        className={[styles.chip, final.includes(word) ? styles.chipFinal : ''].join(' ')}
                        onClick={() => remove(word)}
                      >
                        {word}
                      </button>
                    ))}
                  </div>

                  <p className={styles.hint}>
                    Click a chip to remove it. Click a selected word again to mark it final.
                  </p>

                  <div className={styles.fieldBlock}>
                    <label className={styles.fieldLabel} htmlFor="nameInput">Your name</label>
                    <input
                      id="nameInput"
                      type="text"
                      className={styles.textInput}
                      placeholder="For the PDF and the email"
                      maxLength={60}
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>

                  <div className={styles.panelActions}>
                    <button type="button" className={styles.ghostBtn} onClick={() => window.print()}>
                      Save as PDF
                    </button>
                    <button type="button" className={styles.ghostBtn} onClick={handleEmail}>
                      Email to Leah
                    </button>
                    <button type="button" className={styles.ghostBtn} onClick={handleCopy}>
                      {copyLabel}
                    </button>
                    <button
                      type="button"
                      className={[styles.ghostBtn, styles.dangerBtn].join(' ')}
                      onClick={handleReset}
                    >
                      {resetArmed ? 'Click again to confirm' : 'Start over'}
                    </button>
                  </div>

                  <p className={[styles.saved, savedFlash ? styles.savedShow : ''].join(' ')}>
                    Saved
                  </p>
                </aside>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>
              © Leah Farmer · Cardiff, Wales · <a href="/">leahfarmer.com</a> ·{' '}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </footer>

        </main>
      </div>

      {/* PRINT SHEET — hidden on screen, this is what Save as PDF produces */}
      <div className={styles.printSheet} aria-hidden="true">
        <div className={styles.pvHead}>
          <p className={styles.pvEyebrow}>Leah Farmer Coaching &amp; Advisory</p>
          <p className={styles.pvTitle}>Values Exercise</p>
          <p className={styles.pvSub}>{name ? `${name}  ·  ${printDate}` : printDate}</p>
        </div>

        {finalSorted.length > 0 && (
          <>
            <h4 className={styles.pvHeading}>My values</h4>
            <ul className={styles.pvList}>
              {finalSorted.map(w => <li key={w}>{w}</li>)}
            </ul>
          </>
        )}

        {restSorted.length > 0 && (
          <>
            <h4 className={styles.pvHeading}>Still on the list</h4>
            <p className={styles.pvInline}>{restSorted.join('  ·  ')}</p>
          </>
        )}

        {finalSorted.length === 0 && restSorted.length === 0 && (
          <p className={styles.pvInline}>Nothing selected yet.</p>
        )}

        <p className={styles.pvFoot}>leahfarmer.com  ·  leah@leahfarmer.com</p>
      </div>
    </>
  )
}
