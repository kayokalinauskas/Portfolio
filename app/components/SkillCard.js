import Image from "next/image";
import styles from "../styles/skills.module.scss";

export default function SkillCard({ skill }) {
  return (
    <div className={styles["skill-card"]}>
      <Image width={72} height={72} src={`/assets/skills/${skill}.svg`} />
      <span>{skill}</span>
    </div>
  );
}
