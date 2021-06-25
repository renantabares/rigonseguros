import React from 'react'
import Form from 'react-bootstrap/Form'

export default (props) => {
    const renderOptions = () => {
        const list = props.types || []
        return list.map((type) => (
            <option value={type.value}>{type.name}</option>
        ))
    }

    return (
        <>
            <Form.Control
                onChange={(e) => props.getBrands(e.target.value)}
                as="select">
                <option>Selecione o tipo de veiculo</option>
                {renderOptions()}
            </Form.Control>
        </>
    )
}
