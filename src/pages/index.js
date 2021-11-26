import Head from "next/head";
import styles from "../styles/Home.module.css";
//import BackVideo from "videos/video.mp4";

export default function Home() {
  return (
    <div>
      <Head>
        <title>3in1</title>
      </Head>

      <video
        className={styles.video}
        autoPlay
        loop
        muted
      >
        <source src="videos/video.mp4" type="video/mp4" />
      </video>

      <main className={styles.main}>
        <h1 className={styles.title}>3in1.com.br</h1>
        <p className={styles.description}>Porque o Mundo é Digital!</p>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Portfólio &rarr;</h2>
            <p>O que podemos fazer.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Casos de sucesso &rarr;</h2>
            <p>O que já fizemos.</p>
          </a>

          <a
            href="https://www.instagram.com/3in1.com.br/"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>O que estamos fazendo.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Parceiros &rarr;</h2>
            <p>Com que estamos fazendo.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
