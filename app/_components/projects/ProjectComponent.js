"use client";

import Image from "next/image";
import styles from "../../styles/projectsComponent.module.scss";

export default function ProjectComponent({ projectData }) {
  const skills = projectData.skills && projectData.skills.join(", ") + ".";
  return (
    <section className={styles.project}>
      <main className={styles["project-content"]}>
        <h1>{projectData.projeto}</h1>
        <article>{skills}</article>
        <div className={styles["images-container"]}>
          {projectData.skills &&
            projectData.skills.map((skill, index) => {
              return (
                <Image
                  key={`${skill}-${index}`}
                  width={32}
                  height={32}
                  src={`/assets/skills/${skill}.svg`}
                  alt={`${skill} logo`}
                ></Image>
              );
            })}
        </div>
      </main>
      <aside className={styles["project-image"]}>
        <Image
          width={622}
          height={350}
          src={projectData.imagem}
          alt={`${projectData.project} Demo Image`}
        />
      </aside>
    </section>
  );
}
