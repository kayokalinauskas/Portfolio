import Image from "next/image";
import styles from "../styles/projectsComponent.module.scss";

export default function ProjectComponent({ projectData }) {
  return (
    <section className={styles.project}>
      <main className={styles["project-content"]}>
        <h1>{projectData.projeto}</h1>
        <article>{projectData.skills}</article>
      </main>
      <aside className={styles["project-image"]}>
        <img width={622} height={350} src={projectData.imagem} />
      </aside>
    </section>
  );
}
