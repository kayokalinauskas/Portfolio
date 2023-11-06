"use client";

import Link from "next/link";
import styles from "../../styles/footer.module.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles["footer-section"]}>
      {/* <div className={styles["icons-div"]}>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/kayokalinauskas/"
        >
          <Image
            className={styles["icon-image"]}
            width={32}
            height={32}
            src="/assets/linkedin.svg"
            alt="Kayo Kalinauskas Linkedin"
          />
        </Link>
        <Link target="_blank" href="https://github.com/kayokalinauskas/">
          <Image
            className={styles["icon-image"]}
            width={32}
            height={32}
            src="/assets/github.svg"
            alt="Kayo Kalinauskas Github"
          />
        </Link>
        <Link target="_blank" href="mailto:kalinauskas@live.com">
          <Image
            className={styles["icon-image"]}
            width={32}
            height={32}
            src="/assets/email.svg"
            alt="Kayo Kalinauskas Email"
          />
        </Link>
      </div>
      <p className={styles["footer-logo"]}>&lt;/kayokalinauskas&gt;</p> */}

      <p>
        {t("footer")}
        <br></br>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/kayokalinauskas/"
        >
          {" "}
          Kayo Kalinauskas
        </Link>{" "}
      </p>
    </footer>
  );
}
