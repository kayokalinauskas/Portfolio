"use client";

import { useTranslation } from "react-i18next";
import styles from "../../styles/skills.module.scss";
import SkillCard from "./SkillCard";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { t, i18n } = useTranslation();
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const technologies = [
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Typescript",
    "Next.js",
    "Angular",
    "Tailwind",
    "Sass",
    "Git",
    "Docker",
  ];

  return (
    <section id="skills" className={styles["skill-section"]}>
      <h1 className={"section-title"}>{t("skills")}</h1>
      <div ref={ref} className={styles["skills-cards-section"]}>
        {technologies.map((technology, index) => {
          return (
            <SkillCard
              key={index}
              index={index}
              inView={inView}
              skill={technology}
            />
          );
        })}
      </div>
    </section>
  );
}
