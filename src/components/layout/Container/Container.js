import React from "react";
import styles from "./Container.module.css";

// import { Container } from './styles';

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
