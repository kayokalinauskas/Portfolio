"use client";

import Image from "next/image";
import styles from "../../styles/projectsComponent.module.scss";
import Link from "next/link";

export default function ProjectComponent({ projectData }) {
  const skills = projectData.skills && projectData.skills.join(", ") + ".";
  return (
    <section className={styles.project}>
      <main className={styles["project-content"]}>
        <h1>{projectData.projeto}</h1>
        <article>{skills}</article>
        <div className={styles["skill-images-container"]}>
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
        <div className={styles["buttons-container"]}>
          <Link target="_blank" href={projectData.demo}>
            <button>Live Demo</button>
          </Link>
          <Link target="_blank" href={projectData.github}>
            <button>Github</button>
          </Link>
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
