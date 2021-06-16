import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default props=>{

    return (
        
        <div className='container'>
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#/parasuaempresa">
          Para sua Empresa
        </Breadcrumb.Item>
      </Breadcrumb>

            <h2>Para sua Empresa</h2>
        </div>
    )
}