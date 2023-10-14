"use client";
import styles from "../styles/header.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";
import LanguageChanger from "./LanguageSelector";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <a className={styles.logo}>&lt;kayokalinauskas&gt;</a>
      <a className={styles["logo-short"]}>&lt;kalinauskas&gt;</a>

      <div
        className={`${styles["nav-links"]} ${isMobile ? styles.active : ""}`}
      >
        <Link href="#about">{t("about")}</Link>
        <Link href="#skills">{t("skills")}</Link>
        <Link href="#projects">{t("projects")}</Link>
        <Link href="mailto:kalinauskas@live.com">{t("contact")}</Link>
      </div>
      <div
        className={`${styles.hamburgerMenu} ${isMobile ? styles.active : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className={styles.hamburgerbar}></div>
        <div className={styles.hamburgerbar}></div>
        <div className={styles.hamburgerbar}></div>
      </div>
      <LanguageChanger />
    </header>
  );
}
