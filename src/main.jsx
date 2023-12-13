import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Catalogo from "./Components/Catalogo/index.jsx"
import Cadastrarcarro from './Components/Cadastrarcarro/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Cadastrarusuario from './Components/CadastrarUsuario/index.jsx'
import ListaUsuario from './Components/ListaCliente/index.jsx'
import HomeAdm from './Components/homeADM/index.jsx'
import Home from './Components/Home/index.jsx'
import Showroom from './Components/Home/Showroom/index.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adm" element={<HomeAdm />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/catalogo" element={<Catalogo />} exact />
        <Route path="/listaUsuario" element={<ListaUsuario />} exact />
        <Route path="/cadastro" element={<Cadastrarcarro />} exact />
        <Route path="/usuarios" element={<Cadastrarusuario />} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
