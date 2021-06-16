import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


export default props => {

    return (
        <div className='container'>
            <Breadcrumb className="dark">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#/sinistro">
                    Sinistro
        </Breadcrumb.Item>
            </Breadcrumb>
            <h2>Sinistro</h2>
        </div>
    )
}