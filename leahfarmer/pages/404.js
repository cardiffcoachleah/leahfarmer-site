import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/404.module.css'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found — Leah Farmer</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>This page doesn't exist.</h1>
          <p className={styles.body}>You might have followed an old link, or something moved. Either way, you're not lost — just one click away from where you need to be.</p>
          <div className={styles.links}>
            <a href="/" className={styles.btn}>Go home</a>
            <a href="/coaching" className={styles.link}>Coaching</a>
            <a href="/fractional" className={styles.link}>Fractional & Advisory</a>
            <a href="/about" className={styles.link}>About</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
