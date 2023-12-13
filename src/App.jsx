import React, { useEffect, useState } from "react";
import axios from "axios"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import dos componentes do site//
import { CriarCarros, ListarCarros } from "./request";
import BasicExample from "./Components/Cards";


function App() {
  const [listaCarro, setListaCaro] = useState([])
  const [name, setName] = useState('')
  const [preco, setPreco] = useState(0)

  const request = async () => {
    await ListarCarros().then((res) => setListaCaro(res.data))
  }

  useEffect(() => {
    request()
  }, [])

  const handleButtonClick = async () => {
    if (name && preco) {
      await CriarCarros({
        name: name,
        preco: preco
      }).then(() => request())
    }
  }

  return (
    <div>

      {/* <Navbar /> */}
      



      {listaCarro.map((carros, index, array) => (
        <>
          <p>Carro: {carros.name} - R${carros.preco}</p>
          {/* <p>primeiro valor do parametro "carros" = {carros.name}</p> */}
          {/* <p>segundo valor do parametro "index" =  {index}</p> */}
          {/* <p>terceiro valor do parametro "array" = {JSON.stringify(array)}</p> */}
        </>
      ))}
      <input type="text" placeholder="nome" onChange={e => setName(e.target.value)} />
      <br></br>
      <input type="number" placeholder="preço" onChange={e => setPreco(e.target.value)} />
      <button onClick={() => handleButtonClick()}>Criar</button>
      <BasicExample listaCarro={listaCarro} />
      {/* Outro conteúdo da sua aplicação */}
    </div>
      
  );
}

export default App;
