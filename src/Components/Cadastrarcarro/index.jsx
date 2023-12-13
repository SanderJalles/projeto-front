import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CriarCarros } from "../../request";
import { useNavigate } from "react-router-dom";
import Navegador from "../Navbar";
import SingleFileUploader from "../imagemup";

export default function Cadastrarcarro() {
  const [name, setName] = useState("");
  const [preco, setPreco] = useState(0);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const carros = {
      name,
      preco,
    };

    const formData = new FormData();
    const jsonBlob = new Blob([JSON.stringify(carros)], {
      type: "application/json",
    });

    formData.append('carro', jsonBlob, 'carro.json')
    formData.append("foto", file);
    
    if (name && preco) {
      await CriarCarros(formData).then((data) => {
        navigate("/catalogo")
      });
    }
  };

  return (
    <div className="formCarro">
      <Navegador />
      <h2>Cadastro de carros</h2>
      <input
        type="text"
        placeholder="nome"
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        type="number"
        placeholder="preço"
        onChange={(e) => setPreco(e.target.value)}
      />
      <SingleFileUploader setStates={setFile} />
      <button onClick={() => handleButtonClick()}>Criar</button>
    </div>
  );
}
