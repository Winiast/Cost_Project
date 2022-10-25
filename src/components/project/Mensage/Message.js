import React from "react";
import styles from "./Message.module.css";
import { useState, useEffect } from "react";

export default function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    return;
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}
