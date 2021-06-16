import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

import axios from 'axios';
import Brands from './Brands'
import Type from './Types'
import Models from './Models'
import YearVehicle from './YearVehicle'

function Fipe() {
    const [types, seTypes] = useState([
        {value: 'auto', name: 'Automóvel'},
        {value: 'moto', name: 'Motocicleta'},
        {value: 'caminhao', name: 'Caminhão'}
    ])
    const [tipo, setTipo] = useState('')
    const [marcas, setMarca] = useState([])
    const [modelos, setModelos] = useState([])
    const [codMarca, setCodMarca] = useState('')
    const [codModel, setCodModel] = useState('')
    const [yearVehicle, setYearVehicle] = useState([])
    const [veiculo, setVeiculo] = useState({})
    const URL = 'https://parallelum.com.br/fipe/api/v1/'


    function resetState() {
        setTipo('')
        setMarca([])
        setModelos([])
        setYearVehicle([])
        setVeiculo({})
    }


    async function getBrands(type) {
        setTipo(type)
        const result = await axios.get(URL + type + '/marcas')
        setMarca(result.data)
    }

    async function getModels(codigo) {
        setCodMarca(codigo)
        //GET: https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
        const result = await axios.get(URL + tipo + '/marcas/' + codigo + '/modelos')
        setModelos(result.data.modelos)
    }
    async function getYearVehicle(codigo) {
        setCodModel(codigo)
        //GET: https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/
        const result = await axios.get(URL + tipo + '/marcas/' + codMarca + '/modelos/' + codigo + '/anos')
        setYearVehicle(result.data)
    }

    async function getVehicle(codigo) {
        //GET: https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3
        const result = await axios.get(URL + tipo + '/marcas/' + codMarca + '/modelos/' + codModel + '/anos/' + codigo)
        setVeiculo(result.data)
    }


    function show() {
        if (Object.entries(veiculo).length > 0) {
            return (
                <>
                    <p><strong>Valor: </strong>{veiculo.Valor}</p>
                    <p><strong>Marca: </strong>{veiculo.Marca}</p>
                    <p><strong>Modelo: </strong>{veiculo.Modelo}</p>
                    <p><strong>Ano/Modelo: </strong>{veiculo.AnoModelo}</p>
                    <p><strong>Combustível: </strong>{veiculo.Combustivel}</p>
                </>
            )
        }
    }
    return (
        <>
            <Card  >
                <Card.Body>
                    <Card.Title>Valor de mercado (Fipe)</Card.Title>
                    <Type types={types}  getBrands={getBrands} />
                    <Brands marcas={marcas} getModels={getModels} />
                    <Models models={modelos} getYearVehicle={getYearVehicle} />
                    <YearVehicle years={yearVehicle} getVehicle={getVehicle} />
                    <br />
                    <button onClick={() => resetState()} className="btn btn-primary">Recomeçar</button>
                </Card.Body>

                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                    Resultado:
                   {show()}
                </Card.Body>
            </Card>
        </>
    )

}
export default Fipe;