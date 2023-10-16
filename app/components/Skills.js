import Image from "next/image";
import styles from "../styles/skills.module.scss";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className={styles["skill-section"]}>
      <h1 className={"section-title"}>Skills</h1>
      <div className={styles["skills-cards-section"]}>
        <SkillCard skill={"Javascript"} />
        <SkillCard skill={"HTML"} />
        <SkillCard skill={"CSS"} />
        <SkillCard skill={"React"} />
        <SkillCard skill={"Typescript"} />
        <SkillCard skill={"Next.js"} />
        <SkillCard skill={"Angular"} />
        <SkillCard skill={"Node.js"} />
        <SkillCard skill={"Tailwind"} />
        <SkillCard skill={"Sass"} />
        <SkillCard skill={"Git"} />
      </div>
    </section>
  );
}
