import styles from './experiencia.module.css'

export default function ExperienciaCard(props) {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.titulo}> Cargo </h2>
                <p className={styles.nome}>{props.cargo}</p>
                <h2 className={styles.titulo}> Atividades na Empresa </h2>
                <ul className={styles.lista}>
                    {props.atividade.map((e) => {
                        return (
                            <li className={styles.atividade} key={e}>{e}</li>
                        )
                    }
                    )}
                </ul>
                <p className={styles.data}>{props.data}</p>
            </div>
        </>
    )
}