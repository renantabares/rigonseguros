import React, {useEffect }  from 'react'
import Form from 'react-bootstrap/Form'

export default props => {
    useEffect(() => {
        
    })
    const renderOptions = () => {
        const list = props.types || []
        return list.map(type => (
            <option value={type.value}>{type.name}</option>
        ))
    }

    return (
        <>
            <Form.Control onChange={e => props.getBrands(e.target.value)} as="select">
                {renderOptions()}
            </Form.Control>
        </>
    )

}