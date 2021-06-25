import React, { useState, useEffect } from 'react'
import fetchApi from './fetchApi'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const _initialValue = {
    tipos: [
        { codigo: 'motos', nome: 'Moto' },
        { codigo: 'carros', nome: 'Carro' },
        { codigo: 'caminhoes', nome: 'Caminhão' },
    ],
    marcas: [],
    modelos: [],
    anos: [],
    resultado: null,
}
const _disabled = {
    tipos: false,
    marcas: true,
    modelos: true,
    anos: true,
}
export default function FipeSelect() {
    const [automovel, setAutomovel] = useState(_initialValue)
    const [urlPart, setUrlPart] = useState(null)
    const [role, setRole] = useState(null)
    const [isDisabled, setIsDisabled] = useState(_disabled)

    function handler(e) {
        setIsDisabled({
            ...isDisabled,
            [e.target.name]: !isDisabled[e.target.name],
            [e.target.dataset.target]: !isDisabled[e.target.dataset.target],
        })
        setUrlPart({
            ...urlPart,
            [e.target.name]: {
                select: e.target.name,
                value: e.target.value,
                target: e.target.dataset.target,
            },
        })
        setRole(e.target.name)
    }

    useEffect(() => {
        if (urlPart) {
            ;(async () => {
                const result = await fetchApi(urlPart, role)
                setAutomovel({ ...automovel, ...result })
            })()
        }
        return () => {}
    }, [urlPart, role])

    function optionsRender(optionlist) {
        return optionlist.map((option) => {
            return (
                <option key={option.codigo} value={option.codigo}>
                    {option.nome}
                </option>
            )
        })
    }
    function reset() {
        setAutomovel(_initialValue)
        setUrlPart(null)
        setRole(null)
        setIsDisabled(_disabled)
    }
    function resultado(resultado) {
        if (resultado) {
            return (
                <>
                    <p>
                        <strong>Valor: </strong>
                        {resultado.Valor}
                    </p>
                    <p>
                        <strong>Marca: </strong>
                        {resultado.Marca}
                    </p>
                    <p>
                        <strong>Modelo: </strong>
                        {resultado.Modelo}
                    </p>
                    <p>
                        <strong>Ano/Modelo: </strong>
                        {resultado.AnoModelo}
                    </p>
                    <p>
                        <strong>Combustível: </strong>
                        {resultado.Combustivel}
                    </p>
                </>
            )
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Valor de mercado (Fipe)</Card.Title>
                    <Form.Control
                        disabled={isDisabled.tipos}
                        value={'DEFAULT'}
                        data-target="marcas"
                        name="tipos"
                        onChange={handler}
                        as="select">
                        <option value="DEFAULT" disabled selected>
                            Selecione tipo de veículo
                        </option>
                        {optionsRender(automovel.tipos)}
                    </Form.Control>

                    <Form.Control
                        disabled={isDisabled.marcas}
                        value={'DEFAULT'}
                        data-target="modelos"
                        name="marcas"
                        onChange={handler}
                        as="select">
                        <option value="DEFAULT" disabled selected>
                            Selecione a marca do veículo
                        </option>
                        {optionsRender(automovel.marcas)}
                    </Form.Control>

                    <Form.Control
                        disabled={isDisabled.modelos}
                        value={'DEFAULT'}
                        data-target="anos"
                        name="modelos"
                        onChange={handler}
                        as="select">
                        <option value="DEFAULT" disabled selected>
                            Selecione o modelo do veículo
                        </option>
                        {optionsRender(automovel.modelos)}
                    </Form.Control>

                    <Form.Control
                        disabled={isDisabled.anos}
                        value={'DEFAULT'}
                        data-target="resultado"
                        name="anos"
                        onChange={handler}
                        as="select">
                        <option value="DEFAULT" disabled selected>
                            Selecione o ano do veículo
                        </option>
                        {optionsRender(automovel.anos)}
                    </Form.Control>
                    <br />
                    <button className="btn btn-primary" onClick={reset}>
                        Recomeçar
                    </button>
                </Card.Body>
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                    Resultado:
                    {resultado(automovel.resultado)}
                </Card.Body>
            </Card>
        </>
    )
}
