import { useState, useEffect } from "react";
import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from "./ProjectForm.module.css";
import axios from "axios";

export default function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  const getProjects = () => {
    axios
      .get("http://localhost:3001/categories")
      .then((res) => setCategories(res.data));
  };

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleOnChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do  projeto"
        handleOnChange={handleOnChange}
      />
      <Input
        type="number"
        placeholder="Insira o orçamento do projeto"
        text="Orçamento do Projeto"
        name="bugdget"
        handleOnChange={handleOnChange}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleOnChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
