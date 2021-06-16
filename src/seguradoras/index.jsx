import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default (props) => {
    return (
        <div className="container">
            <Breadcrumb className="dark">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#/seguradoras">
                    Seguradoras
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>Seguradoras</h2>
        </div>
    )
}
