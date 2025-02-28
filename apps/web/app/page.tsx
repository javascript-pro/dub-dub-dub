import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header with Navbar */}
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          Dub Dub Dub
        </a>
        <nav className={styles.nav}>
          <a
            href="https://github.com/javascript-pro/dub-dub-dub"
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Dub Dub Dub</h1>
        <p>A modern monorepo solution with Next.js, Turborepo, and powerful modular features.</p>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>⚡ Super Fast Dev</h3>
          <p>Leverage Turborepo for lightning-fast builds and efficient caching.</p>
        </div>
        <div className={styles.feature}>
          <h3>🛠 Modular & Flexible</h3>
          <p>Only add the bits you want.</p>
        </div>
        <div className={styles.feature}>
          <h3>🚀 Common UI</h3>
          <p>Scale easily by using a single set of components.</p>
        </div>
        <div className={styles.feature}>
          <h3>🚀 Deploy Well</h3>
          <p>Integrated with Vercel for seamless deployments and scalability.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Goldlabel Apps</p>
      </footer>
    </div>
  );
}
