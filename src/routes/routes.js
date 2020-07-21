import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "../pages/login"
import Cadastro from "../pages/cadastro"
import Home from "../pages/home"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes