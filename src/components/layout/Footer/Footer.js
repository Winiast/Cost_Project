import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <FaFacebook />
        </li>

        <li>
          <FaInstagram />
        </li>

        <li>
          <FaLinkedin />
        </li>
      </ul>

      <p className={styles.copyRigth}>
        <span>Costs </span>© 2022 - All rights reserved
      </p>
    </footer>
  );
}
