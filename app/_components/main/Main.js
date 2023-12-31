"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../../styles/main.module.scss";

export default function Main({ locale, namespaces }) {
  const { t, i18n } = useTranslation();
  return (
    <section className={styles["main-section"]}>
      <div className={styles["presentation-div"]}>
        <p className={styles.greeting}>{t("greeting")}</p>
        <h1 className={styles.name}>Kayo Kalinauskas</h1>

        <h2 className={styles.subtitle}>&lt;{t("frontenddev")}/&gt;</h2>
        <p className={styles.presentation}>{t("presentation")}</p>
        <Link
          href={`/assets/CV-Kayo-Kalinauskas-${i18n.language}.pdf`}
          target="_blank"
        >
          <button className={styles["resume-button"]}>
            {t("resumedownload")}
          </button>
        </Link>
      </div>
      <div className={styles["image-container"]}>
        <Image
          src="./assets/programming-animated.svg"
          fill={true}
          alt="Programmer hands typing"
          priority={true}
        />
      </div>
    </section>
  );
}
