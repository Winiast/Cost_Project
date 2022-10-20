import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./ProjectForm.module.css";

export default function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do  projeto"
      />
      <Input
        type="number"
        placeholder="Insira o orçamento do projeto"
        text="Orçamento do Projeto"
        name="bugdget"
      />

      <Select name="category_id" text="Selecione a categoria" />
    </form>
  );
}
