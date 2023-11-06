"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles["footer-section"]}>
      <Link
        target="_blank"
        href="https://github.com/kayokalinauskas/Portfolio/"
      >
        <p>{t("footer")}</p>
        <span>Kayo Kalinauskas</span>
      </Link>
    </footer>
  );
}
