import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

const MENUS = [
  {
    label: 'Coaching',
    items: [
      { href: '/coaching', label: '1:1 Coaching' },
      { href: '/professional-narrative', label: 'Professional Narrative' },
      { href: '/eft', label: 'EFT Sessions' },
    ],
  },
  {
    label: 'Fractional & Advisory',
    items: [
      { href: '/fractional', label: 'Overview' },
      { href: '/fractional-cpo', label: 'Fractional Leadership' },
      { href: '/product-due-diligence', label: 'Product Due Diligence' },
    ],
  },
]

export default function Nav() {
  const [openIndex, setOpenIndex] = useState(null)
  const [canHover, setCanHover] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setCanHover(mq.matches)
    const onChange = (e) => setCanHover(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    function handlePointerDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null)
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <nav className={styles.nav} ref={navRef}>
      <a href="/" className={styles.logo}>
        <img src="/logo.png" alt="Leah Farmer Coaching & Advisory" className={styles.logoImg} />
      </a>

      <div className={styles.links}>
        {MENUS.map((menu, i) => (
          <div
            key={menu.label}
            className={styles.menu}
            onMouseEnter={canHover ? () => setOpenIndex(i) : undefined}
            onMouseLeave={canHover ? () => setOpenIndex((cur) => (cur === i ? null : cur)) : undefined}
          >
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={openIndex === i}
              aria-haspopup="true"
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
            >
              {menu.label}
              <span className={styles.caret} aria-hidden="true">&#9662;</span>
            </button>

            <div className={`${styles.dropdown} ${openIndex === i ? styles.dropdownOpen : ''}`}>
              {menu.items.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpenIndex(null)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <a href="/about" className={styles.plainLink}>About</a>
      </div>
    </nav>
  )
}
