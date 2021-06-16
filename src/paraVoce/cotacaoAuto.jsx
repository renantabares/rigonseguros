import React, { useState} from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Types from '../components/fipe/Types';
import Brands from '../components/fipe/Brands'
import Models from '../components/fipe/Models'
import YearVehicle from '../components/fipe/YearVehicle'

function CotacaoAuto() {

    const [tipo, setTipo] = useState('')
    const [marcas, setMarca] = useState([])
    const [modelos, setModelos] = useState([])
    const [codMarca, setCodMarca] = useState('')
    const [codModel, setCodModel] = useState('')
    const [yearVehicle, setYearVehicle] = useState([])
    const [veiculo, setVeiculo] = useState({})

    const URL = 'https://parallelum.com.br/fipe/api/v1/';

    async function getBrands(type) {
        setTipo(type);
        const result = await axios.get(URL + type + '/marcas');
        setMarca(result.data);
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
   

    return (
        <div className='container'>
            <Breadcrumb className="dark">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#/paravoce">
                    Para você
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#/cotacao-auto">
                    Cotação Auto
                </Breadcrumb.Item>
            </Breadcrumb>
            <Jumbotron>
                <h4>Cotação de seguro auto</h4>
               <fieldset>Veiculo</fieldset>
                <Types getBrands={getBrands}></Types>
                <Brands marcas={marcas} getModels={getModels} />
                <Models models={modelos} getYearVehicle={getYearVehicle} />
                <YearVehicle years={yearVehicle} getVehicle={getVehicle} />
                <button onClick={()=> console.log(veiculo)  } className="btn btn-primary">Enviar cotação</button>
            </Jumbotron>
        </div>
    );

}
export default CotacaoAuto;
