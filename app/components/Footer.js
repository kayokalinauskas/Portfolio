import Link from "next/link";
import styles from "../styles/footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["icons-div"]}>
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
      <p className={styles["footer-logo"]}>&lt;/kayokalinauskas&gt;</p>
    </footer>
  );
}
