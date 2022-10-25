import React from "react";
import Input from "../Input/Input";
import { useState } from "react";
import styles from "../Form/ProjectForm.module.css";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          text="Nome do serviço"
          name="name"
          placeholder="Insira o nome do serviço"
          handleOnChange={handleChange}
        />

        <Input
          type="number"
          text="Custo do serviço"
          name="costs"
          placeholder="Insira o valor total"
          handleOnChange={handleChange}
        />

        <Input
          type="text"
          text="Descriçao do serviço"
          name="descrition"
          placeholder="Descreva o serviço"
          handleOnChange={handleChange}
        />

        <SubmitButton text={btnText} />
      </form>
    </>
  );
}
