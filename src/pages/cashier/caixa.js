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

  function handleFinish(a) {
    console.log(a)
  }

  return (
    <div>
      <div className="site-card-wrapper">
        <h1> Caixa em uso por: </h1>
        <p>  - Jorge de Souza</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card style={{ flex: "1", margin: "10px", height: "150px" }}>
            <Form layout="horizontal" onFinish={handleFinish}>
              <Form.Item
                label='Total da Compras' layout="inline"
              > <Input placeholder="Apenas Números" type="text" /></Form.Item>
              <Form.Item><Button type="primary" layout="inline" size="large" style={{ marginTop: 8, width: "10%", alignItems: 'center' }}
                shape="round" layout="inline" htmlType="submit">Cobrar</Button></Form.Item>
            </Form>
          </Card>
        </div>
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
      <Button style={{ marginTop: 16, marginLeft: 32, width: "10%", alignItems: 'center' }} type="primary"
        size="large" shape="round" onClick={handleAbastecer}> Abastecer </Button>
    </div>
  )
}

export default Cashier
