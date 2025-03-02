import styles from "./theme/page.module.css";
import Image from "next/image";
import Link from "next/link";
import Hero from "@repo/ui/Hero/Hero";
import ResizingGrid from "@repo/ui/ResizingGrid/ResizingGrid";
import Appshell from "@repo/ui/Appshell/Appshell";
import chapterList from "../public/json/chapters.json";

export default function Home() {
  return <Appshell>
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
          </nav>
        </header>
        <main className={styles.main}>
            <Hero 
              icon="share"
              title="Open Source Code"
              subheader="Get it on GitHub"
              imageSrc="/jpg/opengraph.jpg"
            />
            <ResizingGrid />
        </main>
        <footer className={styles.footer}>
          <small>Goldlabel</small>
        </footer>
      </Appshell>
};
