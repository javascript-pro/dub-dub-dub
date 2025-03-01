import styles from "./page.module.css";
import Image from "next/image";
import {Chapters} from "../ui/Chapters";
import {Card} from "@repo/ui/card";
import Icon from "@repo/ui/Icon/Icon";

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
            Sign In
          </a>
          {/* <a href="/signup" className={`${styles.button} ${styles.secondary}`}>
            Signup
          </a> */}
        </nav>
      </header>
      
      <main className={styles.main}> 
        <div className={styles.hero}>
          <h1>
            Dub Dub Dub
          </h1>
          <Icon icon="settings" />
        </div>
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
