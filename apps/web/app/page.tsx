import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Chapters } from "../ui/Chapters";
import Hero from "@repo/ui/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header with Navbar */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/svg/favicon.svg"
            alt="Dub Dub Dub"
            width={50} 
            height={50}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/login" className={`${styles.button} ${styles.primary}`}>
            Sign In
          </Link>
          {/* <Link href="/signup" className={`${styles.button} ${styles.secondary}`}>
            Signup
          </Link> */}
        </nav>
      </header>
      
      <main className={styles.main}> 
        <Hero 
          icon="code"
          title="dkahsdkh"
        />
        <Chapters />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <a 
          href="https://github.com/javascript-pro/dub-dub-dub"
          className={`${styles.button} ${styles.secondary}`}
          target="_blank"
          rel="noopener noreferrer">
          Get the code
        </a>
      </footer>
    </div>
  );
}
