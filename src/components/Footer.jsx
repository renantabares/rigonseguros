import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from './img/logo_aba.png'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default (props) => {
    return (
        <>
            <Row>
                <Container>
                    <Col sm>
                        <Nav
                            style={{ color: 'white' }}
                            className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link href="#/paravoce">PARA VOCÊ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#/parasuaempresa">
                                    PARA SUA EMPRESA
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#/seguradoras">
                                    PARCEIRAS
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#/sinistro">SINISTRO</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <a href="/">
                            <img
                                width="20px"
                                src={Logo}
                                alt="logo Rigon Corretora de Seguros"
                            />
                        </a>
                        <p>Rigon Corretora - Todos os direitos reservados</p>
                    </Col>
                    <Col sm></Col>
                    <Col sm>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link
                                    target="blank"
                                    href="https://www.facebook.com/rigonseguros">
                                    <FaFacebook />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    target="blank"
                                    href="https://wa.me/555199853846/?text=Gostaria%20de%20saber%20o%20mais%20sobre%20seguros">
                                    <FaWhatsapp />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="mailto:rigon@rigonseguros.com.br">
                                    <MdEmail />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Container>
            </Row>
        </>
    )
}
