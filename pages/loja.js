import styles from '../styles/Home.module.css'

function Loja() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <a href="/" className={styles.card}>
                    <h2>&larr; Página Inicial</h2>
                    {/* <p>Página Inicial</p> */}
                </a>
            </div>
            <h1>Loja</h1>

    </main>
    )
}

export default Loja;