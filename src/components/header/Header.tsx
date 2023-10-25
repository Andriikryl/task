import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <Link href={"/"} className={style.link}>
          Home
        </Link>
      </Container>
    </header>
  );
}
