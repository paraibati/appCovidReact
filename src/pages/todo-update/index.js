import React, { Component } from "react"
import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';

export default class TodoUpdate extends Component{
    constructor(){
        super()

        this.state = {
            todo: {},
            title: "",
            description: "",
        }

        this.titleChange = this.titleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // metodo pra preencher o objeto todo
    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await Api.get(`/todo/show/${id}`)
        this.setState({todo: response.data})
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
        const {todo} = this.state
        const object = {}

        if(title === ""){
            object.title = todo.title
        }else{
            object.title = title
        }
        if(description === ""){
            object.description = todo.description
        }else{
            object.description = description
        }

        this.update(object)
        event.preventDefault(event)
    }

    // metodo para "atualizar" o objeto
    update = async(object) => {
        const {id} = this.props.match.params
        await Api.put(`/todo/update/${id}`, object)
        toast.success("Atualizado com Sucesso!", {position: toast.POSITION.BOTTOM_CENTER})
        this.props.history.push(`/todo/show/${id}`);
    }

    // metodo para renderizar a pagina
    render(){
        const {todo} = this.state
        return(
            <div className="todo-update">
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" defaultValue={todo.title} onChange={this.titleChange} />
                        <textarea type="text" defaultValue={todo.description} onChange={this.descriptionChange} />
                        <input type="submit" value="Alterar TODO" />
                        <Link to={`/todo/show/${todo._id}`}>Voltar</Link>
                    </form>
                </article>
            </div>
        )
    }
}