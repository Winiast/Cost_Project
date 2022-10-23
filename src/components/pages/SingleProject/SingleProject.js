import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../layout/loading/Loading";
import Container from "../../layout/Container/Container";

export default function SingleProject() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/${id}`).then((response) => {
      setProject(response.data);
    });
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div>
          <Container customClass="column">
            <div>
              <h1>Projeto: {project.name}</h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div>
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
                <div>
                  <p>Detalhes do projeto</p>
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
