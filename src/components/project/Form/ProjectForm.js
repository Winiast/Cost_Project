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

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
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
        value={project.name}
      />
      <Input
        type="number"
        placeholder="Insira o orçamento do projeto"
        text="Orçamento do Projeto"
        name="budget"
        handleOnChange={handleOnChange}
        value={project.budget}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
