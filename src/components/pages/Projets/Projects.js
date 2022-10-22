import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Project.module.css";
import Message from "../../project/Mensage/Message";
import axios from "axios";
import Container from "../../layout/Container/Container";
import LinkButton from "../../layout/LinkButton/LinkButton";
import ProjectCard from "../../project/ProjectCard/ProjectCard";
import Loading from "../../layout/loading/Loading";

export default function Projects() {
  const location = useLocation();
  let message = "";

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3001/projects").then((response) => {
        setProjects(response.data);
        setRemoveLoading(true);
        console.log(response.data);
      });
    }, 2000);
  }, []);

  if (location.state) {
    message = location.state.message;
  }
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass={"start"}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project?.category?.name}
              key={project.id}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Nenhum projeto encontrado!</p>
        )}
      </Container>
    </div>
  );
}
