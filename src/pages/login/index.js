import React, { Component} from "react"
// import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"

export default class Login extends Component{
    
    constructor(){
        super()

        this.state = {

        }
    }

    // metodo pra preencher o objeto todo
    componentDidMount(){

    }

    // metodo para renderizar a pagina
    render(){
        
        return (
            <div className="login">
                <p>Login</p>
                <Link to={"/cadastro"}>Cadastro</Link>
                <Link to={"/home"}>Home</Link>
            </div>
        )
    }
}