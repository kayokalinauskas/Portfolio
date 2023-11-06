"use client";
import styles from "../../styles/header.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const handleClickNav = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        &lt;/&gt;
      </Link>

      <nav
        className={`${styles["nav-links"]} ${
          isNavMenuOpen ? styles.active : ""
        }`}
        onClick={handleClickNav}
      >
        <Link href="#about">{t("about")}</Link>
        <Link href="#skills">{t("skills")}</Link>
        <Link href="#projects">{t("projects")}</Link>
        <Link href="mailto:kalinauskas@live.com">{t("contact")}</Link>
      </nav>
      <div
        className={`${styles.hamburgerMenu} ${
          isNavMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMobileMenu}
      >
        <div className={styles.hamburgerbar}></div>
        <div className={styles.hamburgerbar}></div>
        <div className={styles.hamburgerbar}></div>
      </div>
      <LanguageSelector />
    </header>
  );
}
