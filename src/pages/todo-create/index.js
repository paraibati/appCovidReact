import React, { Component } from "react"
import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';

export default class TodoCreate extends Component{

    constructor(){
        super()

        this.state = {
            title: "",
            description: "",
        }

        this.titleChange = this.titleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // metodo pra observar mudancas no titulo
    titleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    // metodo pra observar mudancas na descricao
    descriptionChange(event) {
        this.setState({
            description: event.target.value,
        });
    }
    
    // metodo pra observar se há um submit
    handleSubmit(event) {
        const {title, description} = this.state
        const object = {}

        // trata a entrada de dados no create
        if(title !== "" && description !== ""){
            object.title = title
            object.description = description
            this.create(object)
        }else{
            toast.error("Por favor, Preencha Todos os Campos!", {position: toast.POSITION.BOTTOM_CENTER})
        }
        event.preventDefault(event)
    }

    // metodo pra "criar" um objeto
    create = async(object) => {
        await Api.post("/todo/store/", object)
        toast.success("Adicionado com Sucesso!", {position: toast.POSITION.BOTTOM_CENTER})
        this.props.history.push('/');
    }

    // metodo para renderizar a pagina
    render(){
        return(
            <div className="todo-create">
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Título" value={this.state.value} onChange={this.titleChange} />
                        <textarea type="text" placeholder="Descrição" value={this.state.value} onChange={this.descriptionChange} />
                        <input type="submit" value="Adicionar Novo TODO" />
                        <Link to={"/"}>Voltar</Link>
                    </form>
                </article>
            </div>
        )
    }
}