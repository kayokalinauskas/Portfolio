import Header from "../components/Header";
import Main from "../components/Main";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { options } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={options.ns} locale={locale}>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </TranslationsProvider>
  );
}
