import React from 'react'

import Route from './routes'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default props => (
    <div className="App" >
        <Menu></Menu>
        <Route></Route>
        <Footer></Footer>
    </div>

)