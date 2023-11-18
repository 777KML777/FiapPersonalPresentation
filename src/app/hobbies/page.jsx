import Card from '../components/card'
import Titulo from '../components/titulo'
import styles from './hobbies.module.css'

export default function Hobbies() {
    return (
        <>
            <Titulo nome="Hobbies" />
            <div className={styles.cards}>
                <Card imagem='/violao.jpg' texto='Tocar Violão' />
                <Card imagem='/jogo.jpg' texto='Jogar Vídeo Game' />
                <Card imagem='/exercicio.jpg' texto='Me Exercitar' />
            </div>
        </>
    )
}