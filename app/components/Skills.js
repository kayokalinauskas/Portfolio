"use client";

import styles from "../styles/skills.module.scss";
import SkillCard from "./SkillCard";
import { useInView } from "react-intersection-observer";

export default function Skills() {
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
  ];

  return (
    <section id="skills" className={styles["skill-section"]}>
      <h1 className={"section-title"}>Skills</h1>
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
        {/* <SkillCard inView={inView} skill={"Javascript"} />
        <SkillCard inView={inView} skill={"HTML"} />
        <SkillCard inView={inView} skill={"CSS"} />
        <SkillCard inView={inView} skill={"React"} />
        <SkillCard inView={inView} skill={"Typescript"} />
        <SkillCard inView={inView} skill={"Next.js"} />
        <SkillCard inView={inView} skill={"Angular"} />
        <SkillCard inView={inView} skill={"Node.js"} />
        <SkillCard inView={inView} skill={"Tailwind"} />
        <SkillCard inView={inView} skill={"Sass"} />
        <SkillCard inView={inView} skill={"Git"} /> */}
      </div>
    </section>
  );
}
