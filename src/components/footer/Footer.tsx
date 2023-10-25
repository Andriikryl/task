import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <h3 className={style.footer__title}>Footer</h3>
      </Container>
    </footer>
  );
}
