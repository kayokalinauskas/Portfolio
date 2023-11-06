"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/about.module.scss";

export default function About() {
  const { t, i18n } = useTranslation();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="about" className={styles["about-section"]}>
      <div
        className={`${styles["profile-card-section"]} ${
          inView ? styles["active"] : ""
        }`}
      >
        <Image
          className={styles["profile-picture"]}
          width={180}
          height={180}
          src="/assets/me.png"
          alt="Kayo Kalinauskas"
        />
        <div className={styles["icons-div"]}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kayokalinauskas/"
          >
            <Image
              className={styles["icon-image"]}
              width={40}
              height={40}
              src="/assets/linkedin.svg"
              alt="Kayo Kalinauskas Linkedin"
            />
          </Link>
          <Link target="_blank" href="https://github.com/kayokalinauskas/">
            <Image
              className={styles["icon-image"]}
              width={40}
              height={40}
              src="/assets/github.svg"
              alt="Kayo Kalinauskas Github"
            />
          </Link>
          <Link target="_blank" href="mailto:kalinauskas@live.com">
            <Image
              className={styles["icon-image"]}
              width={40}
              height={40}
              src="/assets/email.svg"
              alt="Kayo Kalinauskas Email"
            />
          </Link>
        </div>
      </div>
      <div
        className={`${styles["about-text-section"]} ${
          inView ? styles["active"] : ""
        }`}
      >
        <div>
          <h1 className={"section-title"}>{t("about")}</h1>
        </div>
        <p>
          {t("aboutTextPartOne")}
          <br />
          <br />
          {t("aboutTextPartTwo")}
        </p>
      </div>
    </section>
  );
}
