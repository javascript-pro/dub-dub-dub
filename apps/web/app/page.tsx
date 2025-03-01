import styles from "./theme/page.module.css";
import Image from "next/image";
import Link from "next/link";
import Hero from "@repo/ui/Hero/Hero";
import ItemCard from "@repo/ui/ItemCard/ItemCard";

import chapterList from "../public/json/chapters.json";

export default function Home() {
  return (
    <div className={styles.page}>
      
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
          icon="home"
          title="Open Source Code"
          subheader="Get it on GitHub"
          imageSrc="/jpg/classroom.jpg"
        />
        

        {chapterList.map((item, i) => {
          const {icon, title, subheader} = item;
          return <ItemCard 
                  icon={icon}
                  title={title}
                  subheader={subheader}
                  key={`item_${i}`} 
                />
        })}


      </main>

      <footer className={styles.footer}>
        <small>Goldlabel</small>
      </footer>
      
    </div>
  );
}
