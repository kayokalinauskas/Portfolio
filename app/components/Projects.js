import styles from "../styles/projects.module.scss";
import ProjectComponent from "./projectComponent";

export default function Projects() {
  const data = [
    {
      projeto: "Personal Portfolio",
      imagem: "https://i.imgur.com/Mz0fCrT.png",
      skills: "Reactjs, Nextjs, Javascript, Tailwind.",
      conteudo:
        "Projeto de portfolio pessoal desenvolvido utilizando React, Nextjs, Javascript e Sass. Utilizando react-i18next para internacionalização.",
    },
    {
      projeto: "Currency Converter",
      imagem: "https://i.imgur.com/7RbLNTs.png",
      skills: "Angular, HTML, CSS, Sass.",
      conteudo:
        "Este é um projeto em Angular que implementa um conversor de 3 moedas em Real.",
    },
  ];
  return (
    <div id="projects" className={styles["projects-section"]}>
      {/* <h1>Projects</h1> */}
      {/* {data.map((item, index) => (
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
      ))} */}
      {data.map((a) => {
        return <ProjectComponent projectData={a} />;
      })}
    </div>
  );
}
