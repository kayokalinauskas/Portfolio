import Header from "../_components/header/Header";
import Main from "../_components/main/Main";
import initTranslations from "../i18n";
import TranslationsProvider from "../_components/utils/TranslationsProvider";
import About from "../_components/about/About";
import Skills from "../_components/skills/Skills";
import Projects from "../_components/projects/Projects";
import Footer from "../_components/footer/Footer";
import FloatingMedias from "../_components/utils/FloatingMedias";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { options } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={options.ns} locale={locale}>
      <Header />
      <FloatingMedias />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </TranslationsProvider>
  );
}
