import React, { Component} from "react"
// import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
const Logo = require("../../assets/logo.png")

export default class Cadastro extends Component{
    
    constructor(){
        super()

        this.state = {
            name: "",
            email: "",
            password: ""
        }

        this.nameChange = this.nameChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    nameChange(event){
        this.setState({
            name: event.target.value
        })
    }

    emailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    passwordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event){
        const {name, email, password} = this.state

        if(name !== "" && email !== "" && password !== ""){
            toast.success("Cadastro efetuado com sucesso!", {position: toast.POSITION.BOTTOM_CENTER})
            this.props.history.push("/home")
        }else{
            toast.error("Por favor, Preencha Todos os Campos!", {position: toast.POSITION.BOTTOM_CENTER})
        }

        event.preventDefault(event)
    }

    // metodo para renderizar a pagina
    render(){
        
        return (
            <div className="cadastro">
                <div className="logo">
                    <img src={Logo} alt="erro no carregamento da imagem"/>
                </div>
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Nome Completo" value={this.state.value} onChange={this.nameChange}/>
                        <input type="email" placeholder="Seu e-mail" value={this.state.value} onChange={this.emailChange}/>
                        <input type="password" minLength="8" placeholder="Sua senha" value={this.state.value} onChange={this.passwordChange}/>
                        <input type="submit" value="Criar conta"/>
                        <Link to={"/"}>Já tenho uma conta</Link>
                    </form>
                </article>
            </div>
        )
    }
}