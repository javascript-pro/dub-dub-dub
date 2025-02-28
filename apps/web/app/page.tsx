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
        
        <div className={styles.hero}>
          <h1>
            Goldlabel Turborepo with Next.js
          </h1>
          <p>The term "dub dub dub" was most commonly used between the late 1990s and early 2010s.

1995–2005: This was the peak era when people regularly said "double-u double-u double-u" out loud because web addresses were still a new concept, and most sites used www as a standard prefix. Tech-savvy people, especially developers and IT workers, started using "dub dub dub" as a faster, more casual way to say it.

2005–2010: The usage was still around, but browsers started auto-completing URLs, and most people stopped verbally mentioning "www" when talking about websites.

2010s–Present: Saying "dub dub dub" became mostly a nostalgic or inside joke among older developers and internet veterans. Modern browsers, search engines, and mobile devices rarely require typing www at all.</p>
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
        <Chapters />
        
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <small>by Goldlabel</small>
      </footer>
    </div>
  );
}
