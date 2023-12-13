import axios from "axios";

export function ListarCarros() {
  return axios.get("http://localhost:8080/carros");
}

export function CriarCarros(data) {
  return axios.post("http://localhost:8080/carros/registrarcarro", data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
}

export function DeleteCarros(id) {
  return axios.delete(`http://localhost:8080/carros/deletecarro/${id}`);
}

export const EditarCarro = (id, novoCarro) => {
  return axios.put(`http://localhost:8080/carros/editcarro/${id}`, novoCarro);
};
