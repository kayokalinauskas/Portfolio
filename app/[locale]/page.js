import Header from "../components/header";
import Main from "../components/main";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, options } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={options.ns} locale={locale}>
      {/* <h1>{t("teste")}</h1> */}
      <Header namespaces={i18nNamespaces} locale={locale} />
      <Main namespaces={i18nNamespaces} locale={locale} />
    </TranslationsProvider>
  );
}
