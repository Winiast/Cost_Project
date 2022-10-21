import React from "react";
import styles from "./Submit_Button.module.css";

export default function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}
