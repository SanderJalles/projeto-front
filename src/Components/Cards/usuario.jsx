import { Button, Card, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { DeleteCarros, EditarCarro, ListarCarros } from "../../request";
import { useEffect, useState } from "react";
import {
  DeletarUsuario,
  EditarUsuario,
  ListarUsuario,
} from "../../request/user";

function CardUsuario({ listaCliente }) {
  const [novaListaCliente, setNovaListaCliente] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const [indiceAtual, setIndiceAtual] = useState(0);

  const handleDelete = async (id) => {
    
    await DeletarUsuario(id);
    await ListarUsuario().then((res) => setNovaListaCliente(res.data));
  };

  useEffect(() => {
    if (listaCliente) {
      setNovaListaCliente([...listaCliente]);
    }
  }, [listaCliente]);

  const handleInput = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    if (inputName === "nome") {
      setName(value);
    } else if (inputName === "cpf") {
      setCpf(value);
    } else if (inputName === "telefone") {
      setTelefone(value);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await EditarUsuario(id, {
        name,
        cpf,
        telefone,
      });
      await ListarUsuario().then((res) => setNovaListaCliente(res.data));
    } catch (error) {
      console.err(error);
    }
  };

  const handleEdit = (nome, cpf, telefone, index) => {
    setName(nome);
    setCpf(cpf);
    setTelefone(telefone);
    if (modoEdicao) {
      setIndiceAtual(index);
      if (index === indiceAtual) {
        setModoEdicao(!modoEdicao);
      }
    } else {
      setModoEdicao(!modoEdicao);
      setIndiceAtual(index);
    }
  };

  return (
    novaListaCliente &&
    novaListaCliente.map((cliente, index) => (
      <Card
        style={{
          width: "18rem",
          marginBottom: "1rem",
          background: "gray",
          color: "white",
        }}
        key={index}
      >
        <Card.Body>
          <Card.Title>{cliente.name}</Card.Title>
          <Card.Text>
            CPF:
            {cliente.cpf}
          </Card.Text>
          <Card.Text>
            Telefone:
            {cliente.telefone}
          </Card.Text>
          <Row className="mb-4">
            <Col>
              <Button
                variant="primary"
                onClick={() => handleDelete(cliente.id)}
              >
                Deletar{" "}
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                onClick={() =>
                  handleEdit(cliente.name, cliente.cpf, cliente.telefone, index)
                }
              >
                Editar{" "}
              </Button>
            </Col>
          </Row>

          {modoEdicao && indiceAtual == index ? (
            <Row>
              <Row className="mb-2">
                <input
                  type="text"
                  name="nome"
                  value={name}
                  onChange={handleInput}
                />
              </Row>
              <Row className="mb-2">
                <input
                  type="string"
                  name="cpf"
                  value={cpf}
                  onChange={handleInput}
                />
              </Row>
              <Row className="mb-2">
                <input
                  type="string"
                  name="telefone"
                  value={telefone}
                  onChange={handleInput}
                />
              </Row>
              <Button onClick={() => handleUpdate(cliente.id)}>Salvar</Button>
            </Row>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    ))
  );
}

export default CardUsuario;
