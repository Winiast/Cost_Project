import React from "react";
import styles from "./Submit_Button.module.css";

export default function SubmitButton({ text, onClickExecute }) {
  return (
    <div>
      <button className={styles.btn} onClick={onClickExecute}>
        {text}
      </button>
    </div>
  );
}
