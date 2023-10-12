import styles from "../styles/main.module.scss";
import Image from "next/image";
import initTranslations from "../i18n";
import { currentLocale } from "next-i18n-router";

export default async function Main({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);
  return (
    <section className={styles["main-section"]}>
      <div className={styles["presentation-div"]}>
        <p className={styles.greeting}>{t("greeting")}</p>
        <h1 className={styles.name}>Kayo Kalinauskas</h1>

        <h2 className={styles.subtitle}>&lt;{t("frontenddev")}/&gt;</h2>
        <p className={styles.presentation}>{t("presentation")}</p>
        <button>{t("resumedownload")}</button>
      </div>
      <div className={styles["image-container"]}>
        <Image src="./assets/ProgrammerImage.svg" fill={true} alt="Teste" />
      </div>
    </section>
  );
}
