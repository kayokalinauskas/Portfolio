import Header from "../components/header";
import Main from "../components/main";
import initTranslations from "../i18n";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <h1>{t("teste")}</h1>
      {/* <Header />
      <Main /> */}
    </>
  );
}
