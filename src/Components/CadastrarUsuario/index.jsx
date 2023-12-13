import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { CriarUsuario } from "../../request/user";
import Navegador from "../Navbar";



export default function CadastrarUsuario() {

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, settelefone] = useState('')
  const navigate = useNavigate() 


  const handleButtonClick = async () => {
    if (name && cpf && telefone) {
      await CriarUsuario({
        name: name,
        cpf: cpf,
        telefone: telefone 
      }).then(() => navigate('/listaUsuario'))
    }
  }

  return (
    <div>
       <Navegador />
      <h2>Cadastro de usuarios</h2>
      <input type="text" placeholder="nome" onChange={e => setName(e.target.value)} />
      <br></br>
      <input type="text" placeholder="cpf" onChange={e => setCpf(e.target.value)} />
      <br></br>
        <input type="text" placeholder="telefone" onChange={e => settelefone(e.target.value)} />
      <button onClick={() => handleButtonClick()}>Criar</button>
    </div>
  )
}
