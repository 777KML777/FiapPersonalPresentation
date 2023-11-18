import Link from "next/link"
import styles from "./menu.module.css"

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.opcoes}>
                <li className={styles.opcao}>
                    <Link href={'/'} className={styles.link}>
                        Sobre você
                    </Link>
                </li>
                <li className={styles.opcao}>
                    <Link href={'/experiencias'} className={styles.link}>
                        Experiências
                    </Link>
                </li>
                <li className={styles.opcao}>
                    <Link href={'/formacoes'} className={styles.link}>
                        Formações
                    </Link>
                </li>
                <li className={styles.opcao}>
                    <Link href={'/hobbies'} className={styles.link}>
                        Hobbies
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
