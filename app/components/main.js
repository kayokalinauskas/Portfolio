import styles from "../styles/main.module.scss";
import Image from "next/image";
import initTranslations from "../i18n";

export default async function Main({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);
  return (
    <section className={styles["about-section"]}>
      <div>
        <p className={styles.greeting}>{t("greeting")}</p>
        <h1>Kayo Kalinauskas</h1>
        <h2 className={styles.subtitle}>&lt;{t("frontenddev")}/&gt;</h2>
        <p>{t("presentation")}</p>
        <button>{t("resumedownload")}</button>
      </div>
      <Image
        src="./assets/ProgrammerImage.svg"
        width={550}
        height={550}
        alt="Teste"
      />
    </section>
  );
}
