import React from 'react'
import Form from "react-bootstrap/Form";

export default props => {
    
    const isDisable = props.marcas.length > 0 ? false : true

    const renderOptions= ()=> {
        const list = props.marcas || []
        return list.map(marca=>(
            <option value={marca.codigo}>{marca.nome}</option>
        ))
    }
    return (
        <>
            <Form.Control disabled={isDisable} onChange={e => props.getModels(e.target.value)} as="select">
                <option>Selecione a marca</option>
                {renderOptions()}
            </Form.Control>
        </>
    )
}
