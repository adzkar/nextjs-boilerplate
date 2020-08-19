import Head from "next/head";
import styles from "../styles/Home.module.css";
import IMAGE from "../src/assets/images";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        alt="sample image"
        src={IMAGE.pikachu}
        style={{ maxWidth: "50px" }}
      />
      <h1>Hola..</h1>
    </div>
  );
}
