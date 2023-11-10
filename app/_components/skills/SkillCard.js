"use client";

import Image from "next/image";
import styles from "../../styles/skills.module.scss";

export default function SkillCard({ skill, inView, index }) {
  return (
    <div
      className={`${styles["skill-card"]} ${
        inView ? styles[`active-${index}`] : ""
      }`}
    >
      <Image
        width={58}
        height={58}
        src={`/assets/skills/${skill}.svg`}
        alt={`${skill} logo`}
        placeholder="blur"
        blurDataURL={`/assets/skills/${skill}.svg`}
      />
      <span>{skill}</span>
    </div>
  );
}
