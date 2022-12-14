import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../layout/loading/Loading";
import { v4 as uuidv4 } from "uuid";
import Container from "../../layout/Container/Container";
import styles from "./SingleProject.module.css";
import ProjectForm from "../../project/Form/ProjectForm";
import Message from "../../project/Mensage/Message";
import ServiceForm from "../../project/ServiceForm/ServiceForm";
import ServiceCard from "../../project/ServiceCard/ServiceCard";

export default function SingleProject() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [servicesShow, setServicesShow] = useState([]);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/${id}`).then((response) => {
      setProject(response.data);
      setServicesShow(response.data.services);
    });
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editPost(project) {
    setMessage("");
    if (project?.budget < project?.cost) {
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

  function removeService(id, cost) {
    const serviceUpdate = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdate = project;

    projectUpdate.services = serviceUpdate;

    projectUpdate.cost = project.cost - cost;

    axios
      .patch(
        `http://localhost:3001/projects/${projectUpdate.id}`,
        projectUpdate
      )
      .then(() => {
        setProject(projectUpdate);
        setMessage("Serviço removido com sucesso!");
        setType("sucess");
      });
  }

  function createService(project) {
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService?.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project?.budget)) {
      setMessage("O valor do serviço não pode ser maior que o orçamento!");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    axios.patch(`http://localhost:3001/projects/${id}`, project).then(() => {
      setProject(project);
      setShowServiceForm(false);
      setMessage("Serviço adicionado com sucesso!");
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
            <div className={styles.service_form_container}>
              <h2>Adicione um Serviço</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {servicesShow.length < 1 ? (
                <p>Não há serviços cadastrados.</p>
              ) : (
                servicesShow.map((service) => (
                  <ServiceCard
                    id={service?.id}
                    name={service.name}
                    cost={service?.cost}
                    description={service.descrition}
                    handleRemove={removeService}
                    key={service.id}
                  />
                ))
              )}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
