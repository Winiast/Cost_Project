import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Project.module.css";
import Message from "../../project/Mensage/Message";
import Container from "../../layout/Container/Container";
import LinkButton from "../../layout/LinkButton/LinkButton";

export default function Projects() {
  const location = useLocation();
  let message = "";

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
        <p>Projetos ...</p>
      </Container>
    </div>
  );
}
