import "./style.css";
import NavCliente from "../NavbarHome";
import { ListarCarros } from "../../../request";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Showroom() {
  const [listaCarro, setListaCaro] = useState([]);
  const [images, setImages] = useState([]);

  const request = async () => {
    await ListarCarros().then((res) => setListaCaro(res.data));
  };

  useEffect(() => {
    request();
  }, []);

  const getImages = async () => {
    const imagePromises = listaCarro.map(async (value) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/carros${value.imagem}`,
          {
            responseType: "arraybuffer",
          }
        );

        const base64String = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

        return `data:image/jpeg;base64,${base64String}`;
      } catch (error) {
        console.error("Erro ao obter imagem:", error);
        return null;
      }
    });

    const imagesArray = await Promise.all(imagePromises);
    setImages(imagesArray);
  };

  useEffect(() => {
    getImages();
  }, [listaCarro]);

  const handleFilter = (event) => {
    const val = event.target.value
    newList = listaCarro.filter(value => value.name == val)
  }

  return (
    <div>
      <NavCliente />
      Bem vindo
      <div className="container">
        {listaCarro.map((value, index) => {
          return (
            <div className="container-img" key={index}>
              <img
                className="bmw"
                src={`${images[index]}`}
                alt="carro tal"
                width={400}
              />
              <h1>Nome: {value.name}</h1>
              <h1>Preço: {value.preco}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
