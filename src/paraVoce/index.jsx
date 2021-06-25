import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import './index.css'

import FipeComponent from '../components/NewFipe'

export default (props) => {
    return (
        <div className="container">
            <Breadcrumb className="dark">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#/paravoce">Para você</Breadcrumb.Item>
            </Breadcrumb>
            <section id="seguro automovel">
                <Jumbotron id="auto">
                    <h1 className="text-white title">Seguro Auto</h1>
                </Jumbotron>
                <Jumbotron>
                    <h4 className="fs-1 text-center text-dark">
                        Confira as principais caracteristicas do seguro
                        Automóvel
                    </h4>
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0">
                                            <b>Serviços</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Guincho
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Mecânico para conserto
                                                        provisório
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Carro reserva
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Troca de Pneus
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Chaveiro
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="1">
                                            <b>Coberturas</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Colisão, Incêndio e
                                                            Roubo ou Furto
                                                        </strong>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Danos materiais e
                                                            corporais
                                                        </strong>{' '}
                                                        causados a outras
                                                        pessoas ou empresas
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Garantia 0 km:
                                                        </strong>{' '}
                                                        garante que a
                                                        indenização seja feita
                                                        com base no valor de 0
                                                        km da tabela FIPE
                                                        (índice utilizado para
                                                        estabelecer o valor de
                                                        mercado do veículo).
                                                        Podendo ser contratado
                                                        pelo período de 6 meses
                                                        a partir do início do
                                                        seguro.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Despesas
                                                            extraordinárias:
                                                        </strong>{' '}
                                                        oferece um valor
                                                        adicional de
                                                        indenização, para cobrir
                                                        despesas extras que
                                                        possam surgir, no caso
                                                        de indenização integral
                                                        do veículo.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Despesas de
                                                            Higienização do
                                                            Veículo:
                                                        </strong>{' '}
                                                        garante a limpeza e a
                                                        higienização do veículo
                                                        em caso de alagamento
                                                        por água de chuva ou
                                                        inundações
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Acidentes Pessoais
                                                            de Passageiros (APP)
                                                        </strong>{' '}
                                                        do veículo segurado:
                                                        garante cobertura para
                                                        os passageiros do
                                                        veículo segurado
                                                        (incluindo o motorista)
                                                        em caso de morte ou
                                                        invalidez permanente,
                                                        bem como para despesas
                                                        médicas e hospitalares,
                                                        que venham acontecer em
                                                        um acidente coberto pelo
                                                        seguro.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Acessórios e
                                                            equipamentos:
                                                        </strong>{' '}
                                                        cobertura dos aparelhos
                                                        de som/imagem, blindagem
                                                        e/ou kit-gás
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>
                                                            Danos morais:
                                                        </strong>{' '}
                                                        garante o reembolso de
                                                        indenizações por danos
                                                        morais causados a
                                                        terceiros, em
                                                        decorrência de um
                                                        acidente.
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="2">
                                            <b>Alta disponibilidade</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p className="text-dark">
                                                    Nosso segurado conta com
                                                    atendimento especializado,
                                                    disponível em qualquer
                                                    eventualidade.{' '}
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col>
                                <p className="text-dark text-xl-start">
                                    Além de todas as coberturas tradicionais de
                                    Colisão, Incêndio, Roubo e Danos à terceiros
                                    o seguro Auto Proporciona uma série de
                                    serviços que estão 24 horas a sua disposição
                                    para você Rodar Tranquilo
                                </p>
                                <a
                                    href="#/cotacao-auto"
                                    className="btn btn-outline-primary">
                                    Solicite cotação
                                </a>
                            </Col>
                            <Col>
                                <FipeComponent />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </section>
            <section id="seguro residencia">
                <Jumbotron id="residencia">
                    <h1 className="text-white title">Seguro residência</h1>
                </Jumbotron>
                <Jumbotron>
                    <h4 className="fs-1 text-center text-dark">
                        Confira as principais caracteristicas do seguro
                        residência
                    </h4>
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0">
                                            <b>Serviços Básicos</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Vidraceiro{' '}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Chaveiro
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Hidráulica
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Elétrica
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Limpeza da Residência
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Mudança de Móveis
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Guarda provisória de
                                                        Móveis
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Cobertura Provisória de
                                                        Telhados
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Hospedagem alternativa
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Regresso Antecipado
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Recuperação de Veículo
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Vigilância
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="1">
                                            <b>Serviços Especiais</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Instalação de antenas
                                                        VHF ou UHF (casa)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Instalação de chuveiro
                                                        elétrico, não blindado
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Instalação de olho
                                                        mágico (porta de
                                                        madeira)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Instalação de torneira
                                                        elétrica, não blindada
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Instalação de suporte
                                                        para TV, até 70
                                                        polegadas
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Instalação de ventilador
                                                        de teto (até 2 unidades)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Troca de lâmpadas,
                                                        tomadas e interruptores
                                                        (até 10 unidades)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Lubrificação de
                                                        fechaduras e dobradiças
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Instalação de tela de
                                                        segurança (apartamento)
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="2">
                                            <b>Coberturas básicas</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Incêndio.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Explosão.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Fumaça.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Queda de aeronaves
                                                        (helicópteros, aviões,
                                                        ou partes deles).
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="3">
                                            <b>Coberturas Opcionais</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Responsabilidade civil
                                                        familiar.
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Roubo com subtração de
                                                        bens com vestígios
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Danos elétricos
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Pagamento ou Recebimento
                                                        de aluguel no caso de
                                                        sinistro​
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Equipamentos Eletrônicos
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Impacto de Veiculos
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Roubo de Bens no
                                                        Depósito e/ou
                                                        Bicicletário (Exclusivo
                                                        para apartamento)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Pagamento do condomínio
                                                        em caso de perda de
                                                        renda (Exclusivo para
                                                        apartamento)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Danos Causados aos Bens
                                                        do Condomínio (Exclusivo
                                                        para apartamento)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Perda de Lucro e
                                                        Despesas fixas devido
                                                        incêndio por 3 meses
                                                        (Exclusivo para Home
                                                        Office)
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col>
                                <p className="text-dark text-xl-start">
                                    O Seguro Residência protege sua casa ou
                                    apartamento, ou o que você está alugando,
                                    dos danos mais comuns que podem acontecer
                                    aos imóveis.
                                </p>
                                <a className="btn btn-outline-primary">
                                    Solicite cotação
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </section>
            <section id="seguro vida">
                <Jumbotron id="vida">
                    <h1 className="text-white title">seguro vida</h1>
                </Jumbotron>
                <Jumbotron>
                    <h4 className="fs-1 text-center text-dark">
                        Confira as principais caracteristicas do seguro Vida
                        Individual
                    </h4>
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <p className="text-dark text-xl-start">
                                    O seguro Vida Individual é um seguro de vida
                                    completo, com amplas coberturas e vários
                                    serviços opcionais
                                </p>
                                <a
                                    href="/cotacao-auto"
                                    className="btn btn-outline-primary">
                                    Solicite cotação
                                </a>
                            </Col>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0">
                                            <b>Coberura Básica</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Indenização às pessoas
                                                        indicadas por você, em
                                                        caso de sua morte
                                                        natural ou acidental.​​
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="1">
                                            <b>Coberturas Complementares</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Indenização Especial por
                                                        Acidente
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Invalidez Permanente
                                                        Total ou Parcial por
                                                        Acidente{' '}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Invalidez Funcional
                                                        Permanente Total por
                                                        Doença
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Doenças Graves ​- Plano
                                                        10 doenças
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Doenças Graves - Plano
                                                        20 doenças
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Diárias de Incapacidade
                                                        Temporária
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="2">
                                            <b>Assistências</b>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Assistência Funeral{' '}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Assistência Pet
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Segunda Opinião
                                                        Médica(Internacional)
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        E muito mais de acordo
                                                        com produto escolhido
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </section>
        </div>
    )
}
