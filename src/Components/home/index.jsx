import NavCliente from "./NavbarHome";
import "./style.css";

import background from "../../assets/background.jpg";

//imagens importadas

export default function Home() {

  return (
    <div className="Section0">
      <NavCliente />
      <div className="Section1">
       <img src={background} alt="" />
       <h1>dsd</h1>
      </div>
    </div>
  );
}
