import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Leah Farmer</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        <section className={styles.aboutBody}>
          <div className={styles.aboutBodyInner}>
            <h1 className={styles.humanTitle} style={{fontSize: '2rem', marginBottom: '2.5rem'}}>Privacy Policy</h1>

            <div className={styles.credentials}>
              <h2 className={styles.humanTitle}>1. Introduction</h2>
              <p>Welcome to Leah Farmer Coaching & Advisory. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.</p>

              <h2 className={styles.humanTitle}>2. Information We Collect</h2>
              <p>We only collect the following information when you submit comments or forms on our website:</p>
              <ul style={{color: 'rgba(255,255,255,0.8)', paddingLeft: '1.5rem', lineHeight: '2', marginBottom: '1.25rem'}}>
                <li>Name</li>
                <li>Email address</li>
              </ul>

              <h2 className={styles.humanTitle}>3. How We Use Your Information</h2>
              <p>We use your name and email address to respond to your enquiries and provide you with information or services you requested. We do not save any other user data except for the name and email address provided in comments, payments, and forms.</p>
              <p>We also use third-party services that may collect additional information:</p>
              <ul style={{color: 'rgba(255,255,255,0.8)', paddingLeft: '1.5rem', lineHeight: '2', marginBottom: '1.25rem'}}>
                <li><strong style={{color: '#0EB2CD'}}>Stripe:</strong> For processing payments. Please review <a href="https://stripe.com/privacy" target="_blank" rel="noopener" style={{color: '#0EB2CD'}}>Stripe's Privacy Policy</a> for more details.</li>
                <li><strong style={{color: '#0EB2CD'}}>Calendly:</strong> For scheduling appointments. Please review <a href="https://calendly.com/privacy" target="_blank" rel="noopener" style={{color: '#0EB2CD'}}>Calendly's Privacy Policy</a> for more details.</li>
              </ul>

              <h2 className={styles.humanTitle}>4. Cookies</h2>
              <p>We use cookies to improve your experience on our website. These cookies help us understand how you use our site and how we can enhance your experience. We use Google Analytics to analyse site traffic and usage. You have the option to opt-in for cookies through the banner displayed when you first visit our site.</p>

              <h2 className={styles.humanTitle}>5. Data Security</h2>
              <p>We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>

              <h2 className={styles.humanTitle}>6. Your Rights</h2>
              <p>You have the right to access the personal information we hold about you, request the correction of inaccurate or incomplete information, and request the deletion of your personal data.</p>

              <h2 className={styles.humanTitle}>7. Contact Us</h2>
              <p>If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:leah@leahfarmer.com" style={{color: '#0EB2CD'}}>leah@leahfarmer.com</a>.</p>

              <h2 className={styles.humanTitle}>8. Changes to This Privacy Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

              <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginTop: '2rem'}}>Effective Date: May 2024. Last updated: 2025.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
