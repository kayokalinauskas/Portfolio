import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a>&lt;kayokalinauskas&gt;</a>
      <ul className={styles.nav_links}>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
