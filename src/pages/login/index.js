import React, { Component} from "react"
// import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
const Logo = require("../../assets/logo.png")

export default class Login extends Component{
    
    constructor(){
        super()

        this.state = {
            email: "",
            password: ""
        }

        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // metodo pra preencher o objeto todo
    // componentDidMount(){

    // }

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
        const {email, password} = this.state

        if(email !== "" && password !== ""){
            toast.success("Login efetuado com sucesso!", {position: toast.POSITION.BOTTOM_CENTER})
            this.props.history.push("/home")
        }else{
            toast.error("Por favor, Preencha Todos os Campos!", {position: toast.POSITION.BOTTOM_CENTER})
        }

        event.preventDefault(event)
    }

    // metodo para renderizar a pagina
    render(){
        
        return (
            <div className="login">
                <div className="logo">
                    <img src={Logo} alt="erro no carregamento da imagem"/>
                </div>
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Seu e-mail" value={this.state.value} onChange={this.emailChange}/>
                        <input type="password" placeholder="Sua senha" value={this.state.value} onChange={this.passwordChange}/>
                        <input type="submit" value="Acessar"/>
                        <Link to={"/cadastro"}>Você ainda não tem uma conta?<br></br>Clique aqui para criar uma agora!</Link>
                    </form>    
                </article>
                {/* <p>Login</p>
                <Link to={"/cadastro"}>Cadastro</Link>
                <Link to={"/home"}>Home</Link> */}
            </div>
        )
    }
}