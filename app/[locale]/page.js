import About from "../_components/about/About";
import Footer from "../_components/footer/Footer";
import Header from "../_components/header/Header";
import Main from "../_components/main/Main";
import Projects from "../_components/projects/Projects";
import Skills from "../_components/skills/Skills";
import FloatingMedias from "../_components/utils/FloatingMedias";
import TranslationsProvider from "../_components/utils/TranslationsProvider";
import initTranslations from "../i18n";

export const revalidate = 3600;

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
