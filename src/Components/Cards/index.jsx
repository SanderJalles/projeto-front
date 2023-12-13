import { Button, Card, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { DeleteCarros, EditarCarro, ListarCarros } from "../../request";
import { useEffect, useState } from "react";

function BasicExample({ listaCarro }) {
  const [novaListaCarro, setNovaListaCarro] = useState(null)
  const [modoEdicao, setModoEdicao] = useState(false)

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  const [indiceAtual, setIndiceAtual] = useState(0)


  const handleDelete = async (id) => {
    await DeleteCarros(id);
    await ListarCarros().then(res => setNovaListaCarro(res.data));
  }

  useEffect(() => {
    if (listaCarro) {
      setNovaListaCarro([...listaCarro])
    }
  }, [listaCarro])

  const handleInput = (event) => {
    const inputName = event.target.name
    const value = event.target.value
    if (inputName === 'nome') {
      setNome(value)
    } else if (inputName === 'preco') {
      setPreco(value)
    }
  }

  const handleUpdate = async (id) => {
    try {
      await EditarCarro(id, {
        name: nome,
        preco: preco
      })
      await ListarCarros().then(res => setNovaListaCarro(res.data));
    } catch (error) {
      console.err(error)
    }
  }

  return (
    novaListaCarro && (novaListaCarro.map((carro, index) => (
      <Card style={{ width: '18rem', marginBottom: '1rem', background: 'gray', color: 'white' }} key={index}>
        <Card.Body>
          <Card.Title>{carro.name}</Card.Title>
          <Card.Text>
            Preço do carro = R${carro.preco}
          </Card.Text>
          <Row className="mb-4">
            <Col>
              <Button variant="primary" onClick={() => handleDelete(carro.id)}>Deletar </Button>
            </Col>
            <Col>
              <Button variant="primary" onClick={() => {
                setNome(carro.name)
                setPreco(carro.preco)
                if (modoEdicao) {
                  setIndiceAtual(index)
                  if (index === indiceAtual) {
                    setModoEdicao(!modoEdicao)
                  }
                } else {
                  setModoEdicao(!modoEdicao)
                  setIndiceAtual(index)
                }
              }}>Editar </Button>
            </Col>
          </Row>

          {modoEdicao && indiceAtual == index ? <Row>
            <Row className="mb-2">
              <input type="text" name="nome" value={nome} onChange={handleInput} />
            </Row>
            <Row className="mb-2">
              <input type="number" name="preco" value={preco} onChange={handleInput} />
            </Row>
            <Button onClick={() => handleUpdate(carro.id)}>
              Salvar
            </Button>
          </Row>
            :
            ''
          }
        </Card.Body>
      </Card>
    ))
    ));
}

export default BasicExample;