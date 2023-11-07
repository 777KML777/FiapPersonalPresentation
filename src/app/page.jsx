import styles from './page.module.css'

import Botao from "./components/botao";
import CampoTexto from "./components/campoTexto";
import Menu from "./components/menu";
import Titulo from './components/titulo';


export default function Home() {
  return (
    <>
      <Titulo nome="Sobre Você" />
      <div className={styles.campos}>
        <div className={styles.dados_iniciais}>

          <CampoTexto nome="Nome" desativado={false}/>
          <CampoTexto nome="CEP" desativado={false} />
          <Botao />
        </div>

        <div className={styles.endereco}>
          <CampoTexto nome="Logradouro/Rua" desativado={true} />
          <CampoTexto nome="Bairro/Distrito" desativado={true} />
          <CampoTexto nome="Localidade/Cidade" desativado={true} />
          <CampoTexto nome="Estado/UF" desativado={true} />
        </div>
      </div>
    </>
  )
}
