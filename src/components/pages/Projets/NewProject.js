import { useHistory } from "react-router-dom";
import React from "react";
import ProjectForm from "../../project/Form/ProjectForm";
import styles from "./NewProject.module.css";
// import { Container } from './styles';
import axios from "axios";

function NewProject() {
  function createPost(project) {
    project.cost = 0;
    project.services = [];

    axios.post("http://localhost:3001/projects", project).then((response) => {
      console.log(response);
    });
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
    </div>
  );
}

export default NewProject;
