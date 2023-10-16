import Image from "next/image";
import styles from "../styles/about.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className={styles["about-section"]}>
      <div className={styles["profile-card-section"]}>
        <Image
          className={styles["profile-picture"]}
          width={180}
          height={180}
          src="/assets/me.png"
        />
        <div className={styles["icons-div"]}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kayokalinauskas/"
          >
            <Image width={40} height={40} src="/assets/linkedin.svg" />
          </Link>
          <Link target="_blank" href="https://github.com/kayokalinauskas/">
            <Image width={40} height={40} src="/assets/github.svg" />
          </Link>
          <Link target="_blank" href="mailto:kalinauskas@live.com">
            <Image width={40} height={40} src="/assets/email.svg" />
          </Link>
        </div>
      </div>
      <div className={styles["about-text-section"]}>
        <div>
          <h1 className={"section-title"}>About</h1>
        </div>
        <p>
          Suspendisse a eros dolor. Proin vitae scelerisque augue, a convallis
          urna. Vivamus magna leo, porta eget auctor vitae, hendrerit a felis.
          Aliquam erat diam, luctus eget erat et, pulvinar hendrerit diam.
          Praesent gravida sem nec nunc ultrices, ac dictum nulla facilisis.
          Nunc vel consequat tellus, vitae varius mi. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Quisque vel interdum turpis. Aenean sit amet leo eu orci
          placerat sagittis eu sed diam.
        </p>
      </div>
    </section>
  );
}
