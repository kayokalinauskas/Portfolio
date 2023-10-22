import styles from "../styles/projects.module.scss";

export default function Projects() {
  const data = [
    {
      projeto: "Teste",
      imagem: "IMAGEM",
      skills: "x, y z",
      conteudo: "LOREM",
    },
    {
      projeto: "Teste2",
      imagem: "IMAGEM2",
      skills: "x2, y2 z2",
      conteudo: "LOREM2",
    },
    {
      projeto: "Teste3",
      imagem: "IMAGEM3",
      skills: "x3, y3 z3",
      conteudo: "LOREM3",
    },
    {
      projeto: "Teste54",
      imagem: "IMAGEM4",
      skills: "x4, y4 z4",
      conteudo: "LOREm4",
    },
  ];
  return (
    <div id="projects" className={styles["projects-section"]}>
      {/* <h1>Projects</h1> */}
      {data.map((item, index) => (
        <div className={styles.teste} key={index}>
          {index % 2 === 0 ? (
            <div className={styles.teste2}>
              <div>{item.projeto}</div>
              <div>{item.skills}</div>
            </div>
          ) : (
            <div className={styles.teste2}>
              <div>{item.skills}</div>
              <div>{item.projeto}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
