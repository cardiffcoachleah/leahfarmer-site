import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoName}>LEAH FARMER</span>
        <span className={styles.logoSub}>Coaching & Advisory</span>
      </a>
      <div className={styles.links}>
        <a href="/coaching">Coaching</a>
        <a href="/fractional">Fractional & Advisory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  )
}
