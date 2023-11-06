"use client";

import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/projects.module.scss";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const projects = [
    {
      projeto: "Personal Portfolio",
      imagem: "/assets/projects/portfolio.png",
      skills: ["React", "Next.js", "Javascript", "Sass"],
      github: "https://github.com/kayokalinauskas/Portfolio",
      demo: "https://portfolio-mwkfz6q40-kayokalinauskas.vercel.app/",
      conteudo:
        "Projeto de portfolio pessoal desenvolvido utilizando React, Nextjs, Javascript e Sass. Utilizando react-i18next para internacionalização.",
    },
    {
      projeto: "Currency Converter",
      imagem: "/assets/projects/currency-converter.png",
      skills: ["Angular", "HTML", "CSS", "Sass"],
      github: "https://github.com/kayokalinauskas/currency-converter",
      demo: "https://kayokalinauskas.github.io/currency-converter/",
      conteudo:
        "Este é um projeto em Angular que implementa um conversor de 3 moedas em Real.",
    },
  ];
  return (
    <div ref={ref} id="projects" className={`${styles["projects-section"]}`}>
      <h1 className={"section-title"}>{t("projects")}</h1>
      <main
        className={`${styles["project"]} ${inView ? styles["active"] : ""}`}
      >
        {projects.map((project, index) => {
          return (
            <ProjectComponent
              key={`${project}-${index}`}
              projectData={project}
              index={index}
            />
          );
        })}
      </main>
    </div>
  );
}
