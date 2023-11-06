import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/floatingMedias.module.scss";

export default function FloatingMedias() {
  return (
    <aside className={styles["floating-medias-section"]}>
      <Link target="_blank" href="https://www.linkedin.com/in/kayokalinauskas/">
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
      <span className={styles.line}></span>
    </aside>
  );
}
