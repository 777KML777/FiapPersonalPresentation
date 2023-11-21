"use client";
import styles from "./page.module.css";
import axios from "axios";
import { useState } from "react";
import "./components/botao/botao.css";
import CampoTexto from "./components/campoTexto";
import Menu from "./components/menu";
import Titulo from "./components/titulo";

export default function Home() {
  const [cep, setCep] = useState("30881250");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log("entrei aqui");
      setAddress(response.data);
      setError(null);
    } catch (err) {
      setAddress(null);
      setError("CEP não encontrado");
    }
  };

  console.log(address);

  return (
    <>
      <Titulo nome="Sobre Você" />
      <div className={styles.campos}>
        <div className={styles.dados_iniciais}>
          <CampoTexto value="Leonardo" nome="Nome" desativado={false} />

          {/* campo cep */}
          <div className={"container"}>
            <div className={"identificacao"}>
              <p className={"nome"}>Cep</p>
            </div>
            <input
              value={cep}
              type="text"
              className={"texto"}
              onChange={handleCepChange}
              
            />
          </div>
          {/* campo cep */}
          
          <button className={"botao"} onClick={handleSearch}>
            Buscar Cep
          </button>
          {/* <Botao props={handleSearch}/> */}
        </div>

        <div className={styles.endereco}>
          <CampoTexto
            value={address?.logradouro}
            nome="Logradouro/Rua"
            desativado={true}
          />
          <CampoTexto
            value={address?.bairro}
            nome="Bairro/Distrito"
            desativado={true}
          />
          <CampoTexto
            value={address?.localidade}
            nome="Localidade/Cidade"
            desativado={true}
          />
          <CampoTexto value={address?.uf} nome="Estado/UF" desativado={true} />
        </div>
      </div>
    </>
  );
}
