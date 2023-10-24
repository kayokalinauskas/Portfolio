"use client";

import Image from "next/image";
import styles from "../styles/skills.module.scss";

export default function SkillCard({ skill, inView }) {
  return (
    <div
      className={`${styles["skill-card"]} ${inView ? styles["active"] : ""}`}
    >
      <Image
        width={72}
        height={72}
        src={`/assets/skills/${skill}.svg`}
        alt={`${skill} logo`}
      />
      <span>{skill}</span>
    </div>
  );
}
