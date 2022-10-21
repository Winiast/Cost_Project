import { useState, useEffect } from "react";
import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from "./ProjectForm.module.css";
import axios from "axios";

export default function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  const getProjects = () => {
    axios
      .get("http://localhost:3001/categories")
      .then((res) => setCategories(res.data));
  };

  useEffect(() => {
    getProjects();
  }, []);

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

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
