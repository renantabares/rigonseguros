import React from 'react'
import Form from 'react-bootstrap/Form'

export default props => {
  
    const isDisable = props.years.length > 0 ? false : true
    
    const renderOptions = () => {
        const list = props.years || []
        return list.map(year => (
            <option value={year.codigo}>{year.nome}</option>
        ))
    }
    return (
        <>
            <Form.Control disabled={isDisable} onChange={e => props.getVehicle(e.target.value)}  as="select">
                <option>Selecione o ano do Modelo</option>
                {renderOptions()}
            </Form.Control>

        </>
    )
}