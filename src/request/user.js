import axios from "axios"

export function ListarUsuario() {
    return axios.get("http://localhost:8080/contas")
}

export function CriarUsuario(data) {
    return axios.post("http://localhost:8080/contas/registrarconta", data)
}

export function DeletarUsuario(id) {
    return axios.delete(`http://localhost:8080/contas/deletarconta/${id}`)
}

export const EditarUsuario = (id, novaConta) => {
    return axios.put(`http://localhost:8080/contas/editarconta/${id}`, novaConta)
};


