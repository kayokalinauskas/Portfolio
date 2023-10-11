import Header from "../components/header";
import Main from "../components/main";

export default async function Home({ params: { lang } }) {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
