import React from 'react'
import Form from 'react-bootstrap/Form'

export default props => {

    const isDisable = props.models.length > 0 ? false : true

    const renderOptions = () => {
        const list = props.models || []
        return list.map(model => (
            <option value={model.codigo}>{model.nome}</option>
        ))
    }
    return (
        <>
            <Form.Control disabled={isDisable} onChange={e => props.getYearVehicle(e.target.value)} as="select">
               <option>Selecione um Modelo</option>
                {renderOptions()}
            </Form.Control>

        </>
    )
}