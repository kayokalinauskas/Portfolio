import styles from "../styles/main.module.scss";
import Image from "next/image";

export default function Main() {
  return (
    <section className={styles.about_section}>
      <div>
        <p>Hi, I'm</p>
        <h1>Kayo Kalinauskas</h1>
        <h2 className={styles.green}>&lt;Front-end Developer /&gt;</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          massa tincidunt, ullamcorper diam id, molestie nulla.
        </p>
      </div>
      <Image
        src="./assets/ProgrammerImage.svg"
        width={550}
        height={550}
        alt="Teste"
      />
    </section>
  );
}
