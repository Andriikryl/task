import Image from "next/image";
import styles from "./page.module.css";
import TestOne from "@/components/TestOne/TestOne";

import LoginPage from "@/components/Login/Login";

export default function Home() {
  return (
    <>
      <LoginPage />
    </>
  );
}
