import styles from "../../styles/projects.module.scss";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  const projects = [
    {
      projeto: "Personal Portfolio",
      imagem: "/assets/projects/portfolio.png",
      skills: ["React", "Next.js", "Javascript", "CSS"],
      conteudo:
        "Projeto de portfolio pessoal desenvolvido utilizando React, Nextjs, Javascript e Sass. Utilizando react-i18next para internacionalização.",
    },
    {
      projeto: "Currency Converter",
      imagem: "/assets/projects/currency-converter.png",
      skills: ["Angular", "HTML", "CSS", "Sass"],
      conteudo:
        "Este é um projeto em Angular que implementa um conversor de 3 moedas em Real.",
    },
  ];
  return (
    <div id="projects" className={styles["projects-section"]}>
      <h1 className={"section-title"}>Projects</h1>
      <main>
        {projects.map((project, index) => {
          return (
            <ProjectComponent
              key={`${project}-${index}`}
              projectData={project}
            />
          );
        })}
      </main>
    </div>
  );
}
