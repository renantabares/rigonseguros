import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../img/logo_aba.png'

export default props =>  (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src={logo} width='20px' alt="logoRigonSeguros" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/paravoce">PARA VOCÊ</Nav.Link>
                    <Nav.Link href="#/parasuaempresa">PARA SUA EMPRESA</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#/seguradoras">PARCEIRAS</Nav.Link>
                    <Nav.Link eventKey={2} href="#/sinistro">
                        SINISTRO
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
