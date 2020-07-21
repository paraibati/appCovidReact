import React, { Component} from "react"
// import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"

export default class Cadastro extends Component{
    
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
            <div>
                <div className="cadastro">
                <p>Cadastro</p>
                <Link to={"/"}>Login</Link>
                <Link to={"/home"}>Home</Link>
            </div>
            </div>
        )
    }
}