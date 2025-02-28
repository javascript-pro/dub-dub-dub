import styles from "./page.module.css";
import Image from "next/image";
import {Chapters} from "../ui/Chapters";

import {Card} from "@repo/ui/card";

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
      <main>
        
        <div className={styles.hero}>
          <h1>
            
          </h1>

          <Card
            href="/"
            title="Dub Dub Dub"
          >
            Instructions for the Goldlabel Software Stack
            Goldlabel provides a structured approach to developing progressive web applications (PWAs) using a monorepo architecture</Card>
          
          
            {/* <ul>
              <li>Next.js  A React framework for building SSR (Server-Side Rendered) applications</li>
              <li>Turborepo  A high-performance build system for managing monorepos efficiently</li>
              <li>MUI (Material UI)  A UI component library for creating consistent, accessible designs</li>
              <li>Vercel  The preferred deployment platform for Next.js applications.
              By combining these technologies, we can build fast, scalable, and maintainable applications with minimal setup</li>
            </ul> */}

          
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
