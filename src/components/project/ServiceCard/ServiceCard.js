import React from "react";
import styles from "../ProjectCard/ProjectCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";

// import { Container } from './styles';

function ServiceCard({ id, name, cost, description, handleRemove }) {
  function remove(e) {
    e.preventDefault();
    handleRemove(id, cost);
  }

  return (
    <>
      <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
          <span>Custo Total: </span> {cost}
        </p>
        <p>
          <span>Descrição: </span> {description}
        </p>

        <div className={styles.project_card_actions}>
          <button onClick={remove}>
            <BsFillTrashFill />
            Excluir
          </button>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
