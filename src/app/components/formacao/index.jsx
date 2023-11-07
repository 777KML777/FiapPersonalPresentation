import styles from './formacao.module.css'

export default function Formacao(props){
    return(
        <div className={styles.container}>
            <h2 className={styles.titulo}>Curso</h2>
            <p className={styles.nome}>{props.curso}</p>
            <h2 className={styles.titulo}>Instituição</h2>
            <p className={styles.nome}>{props.instituicao}</p>
            <div className={styles.data}>{props.data}</div>
        </div>
    )
}