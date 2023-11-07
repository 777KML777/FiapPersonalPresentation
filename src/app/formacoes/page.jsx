import Formacao from '../components/formacao'
import Titulo from '../components/titulo'
import styles from './formacoes.module.css'

export default function Formacoes() {
    return (
        <>
            <Titulo nome='Formações' />
            <div className={styles.lista}>
                <Formacao curso="Sistemas Para Internet" instituicao="Faculdade de Informática e Administração Paulista (FIAP)" data="02/23 - 11/24"/>
                <Formacao curso="Técnico em Informática" instituicao="Colégio Cotemig" data="02/20 - 11/22"/>
            </div>
        </>
    )
}