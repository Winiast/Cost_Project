import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../img/costs_logo.png";
import Container from "../Container/Container";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/company" className={styles.link}>
              Empresa
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/contact" className={styles.link}>
              Contato
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/projects" className={styles.link}>
              Projects
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/newproject" className={styles.link}>
              Novo Projeto
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
