import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <img src="/logo.png" alt="Leah Farmer" className={styles.logoImg} />
        </div>
        <div className={styles.footerCols}>
          <div className={styles.footerCol}>
            <h4>Work With Me</h4>
            <a href="/coaching">Coaching</a>
            <a href="/fractional">Fractional & Advisory</a>
            <a href="/about">About</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <a href="https://linkedin.com/in/leahfarmer" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://leahfarmer.substack.com" target="_blank" rel="noopener">Substack</a>
            <a href="https://practicalproductmanagementpodcast.com" target="_blank" rel="noopener">Podcast</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <a href="mailto:leah@leahfarmer.com">leah@leahfarmer.com</a>
        <span>·</span>
        <a href="https://calendly.com/lfcoaching/free-discovery-call" target="_blank" rel="noopener">Book a discovery call</a>
        <span>·</span>
        <span>© Leah Farmer</span>
        <span>·</span>
        <span>Cardiff, Wales</span>
        <span>·</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  )
}
