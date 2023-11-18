
import styles from './titulo.module.css'

export default function Titulo(props) {
    return (
        <h1 className={styles.titulo}>{props.nome}</h1>
    )
}