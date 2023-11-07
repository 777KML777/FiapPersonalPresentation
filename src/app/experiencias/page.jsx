import ExperienciaCard from '../components/experiencia'
import Titulo from '../components/titulo'
import styles from './experiencias.module.css'

export default function Experiencias() {

    return (
        <>
            <Titulo nome='Experiências' />
            <div className="lista">
                <ExperienciaCard
                    cargo='Estágiario'
                    atividade={
                        [
                            'Designer de Publicidade',
                            'Auxiliar de Front-End'
                        ]
                    }
                    data='02/22 - 11/22'
                />
            </div>
        </>
    )
}