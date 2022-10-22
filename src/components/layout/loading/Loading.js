import React from "react";
import styles from "./Loading.module.css";
import loading from "../../../img/loading.svg";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img src={loading} alt="loading" className={styles.loading} />
    </div>
  );
}
