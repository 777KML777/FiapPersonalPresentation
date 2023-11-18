import styles from "./campoTexto.module.css"

export default function CampoTexto(props) {
    return (
        <div className={styles.container}>
            <div className={styles.identificacao}>
                <p className={styles.nome}>{props.nome}</p>
            </div>
            <input type="text" className={styles.texto} disabled={props.desativado}/>
        </div>

    )
}
