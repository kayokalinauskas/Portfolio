"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import styles from "../styles/header.module.scss";
import i18nConfig from "../../i18nConfig";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <a className={styles.logo}>&lt;kayokalinauskas&gt;</a>
      <ul className={styles["nav-links"]}>
        <li>{t("about")}</li>
        <li>{t("skills")}</li>
        <li>{t("projects")}</li>
        <li>{t("contact")}</li>
      </ul>
      <select onChange={handleChange} value={currentLocale}>
        <option value="pt-BR">Português</option>
        <option value="en">English</option>
      </select>
    </header>
  );
}
