import Image from 'next/image'

import styles from './card.module.css'

export default function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.img_container}>
                    <Image className={styles.icone} 
                    src={props.imagem}
                    alt={props.texto}
                    width={500}
                    height={500}
                    />
            </div>
            <p className={styles.texto}>{props.texto}</p>
        </div>
    )
}