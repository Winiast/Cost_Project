import React from "react";
import { useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../layout/loading/Loading";
import Container from "../../layout/Container/Container";
import styles from "./SingleProject.module.css";
import ProjectForm from "../../project/Form/ProjectForm";
import Message from "../../project/Mensage/Message";

export default function SingleProject() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/${id}`).then((response) => {
      setProject(response.data);
    });
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function editPost(project) {
    if (project.budget < project.costs) {
      setMessage("O valor do serviço não pode ser maior que o orçamento!");
      setType("error");
      return false;
    }

    axios.patch(`http://localhost:3001/projects/${id}`, project).then(() => {
      setProject(project);
      setShowProjectForm(false);
      setMessage("Projeto atualizado com sucesso!");
      setType("sucess");
    });
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message msg={message} type={type} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span> {project?.category?.name}
                  </p>
                  <p>
                    <span>Total de Orçamento: </span> R${project.budget}
                  </p>

                  <p>
                    <span>Total utilizado: </span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
