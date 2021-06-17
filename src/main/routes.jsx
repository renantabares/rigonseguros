import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import ParaVoce from '../paraVoce'
import paraSuaEmpresa from '../paraSuaEmpresa'
import Seguradoras from '../seguradoras'
import Sinistro from '../sinistro'
import Index from './Main'
import CotacaoAuto from '../paraVoce/cotacaoAuto'

export default function(props){ 
    return(
    <Router history={hashHistory}>
        <Route path="/paravoce" component={ParaVoce} />
        <Route path="/cotacao-auto" component={CotacaoAuto} />
        <Route path="/parasuaempresa" component={paraSuaEmpresa} />
        <Route path="/seguradoras" component={Seguradoras} />
        <Route path="/sinistro" component={Sinistro} />
        <Route path="/" component={Index} />
        <Redirect from="*" to="/" />
    </Router>
)
}