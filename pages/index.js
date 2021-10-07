import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Triuno APP</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Triuno App
        </h1>
        <p className={styles.description}>
          O
          <code className={styles.code}>Código Fonte</code>
          está em você
        </p>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Portfólio &rarr;</h2>
            <p>O que podemos fazer.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Casos de sucesso &rarr;</h2>
            <p>O que já fizemos.</p>
          </a>

          <a href="https://instagram.com/3in1.com.br" className={styles.card}>
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
  )
}


