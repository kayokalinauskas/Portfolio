import { JetBrains_Mono, Poppins } from "next/font/google";
import i18nConfig from "../../i18nConfig.js";
import styles from "../styles/global.scss";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kayo Kalinauskas",
  description: "Kayo Kalinauskas Portfolio",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} className={`${jetbrains.variable} ${poppins.variable}`}>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
