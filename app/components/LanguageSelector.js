import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "../styles/languageSelector.module.scss";
import i18nConfig from "../../i18nConfig";
import { useRouter } from "next/navigation";

export default function LanguageSelector() {
  const [selectorIsOpen, setSelectorIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleSelectLanguage = (e) => {
    setSelectorIsOpen(false);
    const newLocale = e.target.id;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

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

  const options = [
    {
      value: "pt-BR",
      label: "Português",
      flag: "/assets/br-flag.png",
    },
    {
      value: "en",
      label: "English",
      flag: "/assets/uk-flag.png",
    },
  ];

  const options2 = {
    "pt-BR": {
      value: "pt-BR",
      label: "Português",
      flag: "/assets/br-flag.png",
      alt: "Bandeira Brasileira",
    },
    en: {
      value: "en",
      label: "English",
      flag: "/assets/uk-flag.png",
      alt: "United Kingdom Flag",
    },
  };

  const handleSelectorButton = () => {
    setSelectorIsOpen(!selectorIsOpen);
  };

  return (
    <div
      className={`${styles.selector} ${selectorIsOpen ? styles.active : ""}`}
    >
      <div className={styles.select} onClick={handleSelectorButton}>
        <Image
          width={32}
          height={32}
          alt={options2[currentLocale].alt}
          src={options2[currentLocale].flag}
        />
        <span className={styles["language-label"]}>
          {options2[currentLocale].label}
        </span>
        <span>{options.forEach((option) => {})}</span>
        <span className={styles["arrow-down"]}></span>
      </div>
      <div className={styles.dropdown}>
        {options.map((language, index) =>
          language.value !== currentLocale ? (
            <div
              id={language.value}
              key={`${language.value}-${index}`}
              className={styles.language}
              onClick={handleSelectLanguage}
            >
              <img id={language.value} src={language.flag} />
              <span id={language.value} className={styles["language-label"]}>
                {language.label}
              </span>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
