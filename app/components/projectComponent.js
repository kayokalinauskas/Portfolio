import Image from "next/image";

export default function ProjectComponent({ projectData }) {
  return (
    <div>
      <div>{projectData.projeto}</div>
      <div>{projectData.skills}</div>
      <img width={267} height={150} src={projectData.imagem}></img>
    </div>
  );
}
