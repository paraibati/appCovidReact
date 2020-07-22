import React, { Component} from "react"
// import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"

export default class Home extends Component{
    
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
                <div className="home">
                <p>Home</p>
                <Link to={"/"}>Login</Link>
                <Link to={"/cadastro"}>Cadastro</Link>
                <Link to={"/noticias"}>Noticias</Link>
            </div>
            </div>
        )
    }
}