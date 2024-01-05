"use client";

import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/projects.module.scss";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  const { t } = useTranslation();
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
    },
    {
      projeto: "Currency Converter",
      imagem: "/assets/projects/currency-converter.png",
      skills: ["Angular", "Javascript", "Sass", "Docker"],
      github: "https://github.com/kayokalinauskas/currency-converter",
      demo: "https://kayokalinauskas.github.io/currency-converter/",
      conteudo:
        "Este é um projeto em Angular que implementa um conversor de 3 moedas em Real.",
    },
    {
      projeto: "Satisfaction Survey Form",
      imagem: "/assets/projects/satisfaction-survey-forms.png",
      skills: ["React", "Next.js", "Javascript", "Sass"],
      github: "https://github.com/kayokalinauskas/satisfaction-survey-forms",
      demo: "https://satisfaction-survey-forms.vercel.app/",
    },
    {
      projeto: "Todo list",
      imagem: "/assets/projects/todo-list.png",
      skills: ["React", "Typescript"],
      github: "https://github.com/kayokalinauskas/todo-list",
      demo: "https://todo-list-six-teal.vercel.app/",
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
            />
          );
        })}
      </main>
    </div>
  );
}
