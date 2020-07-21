import React, {Component} from "react"
import Api from "../../services/api"
import {Link} from "react-router-dom"
import "./style.css"
import { toast } from 'react-toastify';

export default class Todo extends Component{   
    constructor(){
        super()

        this.state = {
            todo: {},
        }
    }
    
    // metodo pra preencher o objeto todo
    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await Api.get(`/todo/show/${id}`)
        this.setState({todo: response.data})
    }
    
    // metodo para "deletar" o objeto
    delete = async() => {
        const {id} = this.props.match.params
        await Api.delete(`/todo/destroy/${id}`)
        // alert("Deletado com Sucesso!")
        toast.success("Deletado com Sucesso!", {position: toast.POSITION.BOTTOM_CENTER})
        this.props.history.push('/');
    }

    // metodo para renderizar a pagina
    render(){
        const {todo} = this.state
        return ( 
            <div className="todo-info">
                <article>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <div className="atualizar-dado">
                        <Link to={`/todo/update/${todo._id}`}>Alterar Informações</Link>
                    </div>
                    <div className="apagar-dado">
                        <Link onClick={this.delete}>Apagar Registro</Link>
                    </div>
                    <Link to={"/"}>Voltar</Link>
                </article>
            </div>
        )
    }
}