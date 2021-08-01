import { Button, Card, Col, Row } from 'antd';

let qtd = 0;

function valorMoeda(moeda) {
  const valor = (moeda * qtd);
  const formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return formatado;
}

const Cashier = () => {
  return (
    <div>
      <div className="site-card-wrapper">
        <h1> Caixa de Usuário</h1>
        <Row gutter={16}>
          <Col span={4}>
            <Card title="Moedas de R$ 0,01" bordered={false}>
              Quantidade: {qtd} -
              Total: {valorMoeda(0.01)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,05" bordered={false}>
              Quantidade: {qtd} -
              Total: {valorMoeda(0.05)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,10" bordered={false}>
              Quantidade: {qtd} -
              Total: {valorMoeda(0.10)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,25" bordered={false}>
              Quantidade: {qtd} -
              Total: {valorMoeda(0.25)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 0,50" bordered={false}>
              Quantidade: {qtd} -
              Total: {valorMoeda(0.50)}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Moedas de R$ 1,00" bordered={false}>
              Quantidade: {qtd} -
              Total: {valorMoeda(1.00)}
            </Card>
          </Col>
        </Row>
      </div>
      <Button> Abastecer </Button>
    </div>
  )
}

export default Cashier
