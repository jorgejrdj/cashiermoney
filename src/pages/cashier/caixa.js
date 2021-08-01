import { Button, Card, Col, Row } from 'antd';
import { useState } from 'react';

let qtd = 0;

function handleValor(moeda) {

  const valor = (moeda * qtd);
  const formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatado;
}

const Cashier = () => {
  const [state, setState] = useState(0);

  function handleAbastecer() {
    setState(state + 1)

    if (setState === 0) {
      return qtd;
    }
    else {
      return qtd = qtd + 10;
    };

  }

  return (
    <div>
      <div className="site-card-wrapper">
        <h1> Caixa de Usuário</h1>
        <Row gutter={4}>
          <Col span={4}>
            <Card title="Moedas de R$ 0,01" bordered={false}>
              Quantidade: {qtd} -
              Total: {handleValor(0.01)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,05" bordered={false}>
              Quantidade: {qtd} -
              Total: {handleValor(0.05)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,10" bordered={false}>
              Quantidade: {qtd} -
              Total: {handleValor(0.10)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,25" bordered={false}>
              Quantidade: {qtd} -
              Total: {handleValor(0.25)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,50" bordered={false}>
              Quantidade: {qtd} -
              Total: {handleValor(0.50)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 1,00" bordered={false}>
              Quantidade: {qtd} -
              Total: {handleValor(1.00)}
            </Card>
          </Col>
        </Row>
      </div>
      <Button onClick={handleAbastecer}> Abastecer </Button>
    </div>
  )
}

export default Cashier
