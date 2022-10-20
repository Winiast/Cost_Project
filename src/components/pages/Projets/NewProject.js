import React from "react";
import ProjectForm from "../../project/Form/ProjectForm";
import styles from "./NewProject.module.css";
// import { Container } from './styles';

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm />
    </div>
  );
}

export default NewProject;
