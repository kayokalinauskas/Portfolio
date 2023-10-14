import Header from "../components/Header";
import Main from "../components/Main";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, options } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={options.ns} locale={locale}>
      {/* <h1>{t("teste")}</h1> */}
      <Header namespaces={i18nNamespaces} locale={locale} />
      <Main namespaces={i18nNamespaces} locale={locale} />
      <About />
      <Skills />
      <Projects />
    </TranslationsProvider>
  );
}
