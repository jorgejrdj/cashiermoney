import { Button, Card, Col, Input, Form, Row } from 'antd';
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
        <h1> Caixa em uso por: </h1>
        <p>  - Jorge de Souza</p>
        <Form layout="horizontal">
          <Form.Item
            name={['fullname']}
            label='Nome Completo'
          > <Input placeholder="Jorge de Souza" /></Form.Item>
          <Form.Item name={['email']} label="E-mail"> <Input placeholder="Jorge@email.com" /></Form.Item>
        </Form>


        <Row gutter={16}>
          <Col span={8}>
            <Card title="Moedas de R$ 0,01" style={{ padding: 16, margin: 8 }} type="inner" bordered={true}>
              Quantidade: {qtd} -
              Total: {handleValor(0.01)}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Moedas de R$ 0,05" style={{ padding: 16, margin: 8 }} type="inner" bordered={true}>
              Quantidade: {qtd} -
              Total: {handleValor(0.05)}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Moedas de R$ 0,10" style={{ padding: 16, margin: 8 }} type="inner" bordered={true}>
              Quantidade: {qtd} -
              Total: {handleValor(0.10)}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Moedas de R$ 0,25" style={{ padding: 16, margin: 8 }} type="inner" bordered={true}>
              Quantidade: {qtd} -
              Total: {handleValor(0.25)}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Moedas de R$ 0,50" style={{ padding: 16, margin: 8 }} type="inner" bordered={true}>
              Quantidade: {qtd} -
              Total: {handleValor(0.50)}
            </Card>
          </Col>
          <Col span={8} >
            <Card title="Moedas de R$ 1,00" style={{ padding: 16, margin: 8 }} type="inner" bordered={true}>
              Quantidade: {qtd} -
              Total: {handleValor(1.00)}
            </Card>
          </Col>
        </Row>
      </div>
      <Button style={{ marginTop: 16, width: "10%", alignItems: 'center' }} type="primary"
        size="large" shape="round" onClick={handleAbastecer}> Abastecer </Button>
    </div>
  )
}

export default Cashier
