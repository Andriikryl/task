"use client";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "../container/Container";
import style from "./style.module.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const id = useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const handleLogin = async () => {
    if (username === "testuser" && password === "testpassword123") {
      router.push("/tabel");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <section className={style.form__page}>
      <Container>
        <div className={style.form__box}>
          <form onSubmit={handleSubmit} className={style.form}>
            <h1 className={style.form__title}>LOGIN PAGE</h1>
            <div className={style.flex__group}>
              <label className={style.label} htmlFor={emailId}>
                Username
              </label>
              <input
                className={style.input}
                type="text"
                value={username}
                required={true}
                id={emailId}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className={style.flex__group}>
              <label className={style.label} htmlFor={passwordId}>
                Password
              </label>
              <input
                className={style.input}
                type="password"
                value={password}
                id={passwordId}
                required={true}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className={style.form__btn} onClick={handleLogin}>
              Login
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
