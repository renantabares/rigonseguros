import logo from '../img/logo.png';
import './App.css';
import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button"

function Main() {

    
    const date = new Date()
    var year = parseInt((date.getFullYear() - 1994) - 1)

    if (date.getMonth() >= 9) {
        if (date.getMonth() == 9) {
            if (date.getDate() >= 20) {
                year++
            }
        } else {
            year++
        }
    }

    return (
        <div>
            <header className="App-header" >
                <img src={logo} className="App-logo" alt="logoRigonSeguros" />
                <br />
                <Button variant="default" href='#quemSomos' className="text-white">
                    A mais de duas décadas construindo confiança
                </Button>
            </header>
            {/* <Fipe></Fipe> */}
            <Jumbotron fluid id="quemSomos">
                <div id='textQuemSomos'>
                <h2 className="text-center"> Mais de {year} anos de confiança</h2>
                <p className='text-lg-start text-justify'>
                    &nbsp;A <strong>Rigon Corretora de Seguros</strong>, iniciou suas atividades em 20 de outubro de 1994, nos orgulhamos de ter como premissa a satisfação plena de nossos clientes. Nossa estratégia é apoiada no cruzamento do perfil sócio-econômico do cliente com o produto a ser oferecido, o que nos remete a trabalharmos com as maiores e melhores Companhias de Seguros do mercado. Possuímos a convicção de que o Corretor de Seguros deve ser um profissional qualificado e ético, pois, além de ter confiado à si o zelo pelo patrimônio de seus clientes, possui a obrigação de ser um prestador de serviços atualizado, ágil e correto, virtudes essas que são diária e obstinadamente buscadas por nossa empresa. Nosso foco é demonstrar de forma objetiva resultados e benefícios aos nossos clientes, esforçando-se em facilitar todo o processo do seguro, desde sua efetivação até o acompanhamento durante um sinistro e ser prestativos em qualquer momento.
                </p>
                </div>
            </Jumbotron>
        </div >
    );
}

export default Main;