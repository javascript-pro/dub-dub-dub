import styles from "./page.module.css";
import Image from "next/image";
import {Chapters} from "../ui/Chapters"

export default function Home() {

  const features: any = [];

  return (
    <div className={styles.page}>
      {/* Header with Navbar */}
      <header className={styles.header}>

        <a href="/" className={styles.logo}>
          <Image
            src="/svg/favicon.svg"
            alt="Dub Dub Dub"
            width={50} 
            height={50}
            priority
            className={styles.logoImage}
          />
        </a>

        <nav className={styles.nav}>
          <a href="/login" className={`${styles.button} ${styles.primary}`}>
            Login
          </a>
          <a href="/signup" className={`${styles.button} ${styles.secondary}`}>
            Signup
          </a>
        </nav>
      </header>
      <main>
        {/* Hero Section */}
        <Chapters />
        <div className={styles.hero}>
          
          <h3>
            Goldlabel Turborepo with Next.js
          </h3>
          <div className={styles.cta}>
            <a 
              href="https://github.com/javascript-pro/dub-dub-dub"
              className={`${styles.button} ${styles.primary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the code
            </a>
          </div>
        </div>
        
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <small>by Goldlabel</small>
      </footer>
    </div>
  );
}
