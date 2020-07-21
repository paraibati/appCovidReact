import React, { Component } from "react"
import Api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"

export default class Main extends Component{
    
    constructor(){
        super()

        this.state = {
            todos: [],
            todoInfo: {},
            page: 1
        }
    }

    // metodo pra preencher o objeto todo
    componentDidMount(){
        this.loadTodos()
    }

    // carregando pagina com todos objetos
    loadTodos = async(page = 1) => {
        const response = await Api.get(`/todo/index?page=${page}`)
        const {docs, ...todoInfo} = response.data
        this.setState({
            todos: docs, todoInfo, page
        })
    }

    // ir pra outra pagina, se houver
    prevPage = () => {
        const {page} = this.state

        if(page === 1) 
            return
        
        const pageNumber = page - 1
        this.loadTodos(pageNumber)
    }

    // voltar pra outra pagina, se houver
    nextPage = () => {
        const {page, todoInfo} = this.state

        if(page === todoInfo.pages) 
            return
        
        const pageNumber = page + 1
        this.loadTodos(pageNumber)
    }

    // metodo para renderizar a pagina
    render(){
        const { todos, page, todoInfo } = this.state
        return (
            <div className="todo-list">
                <div className="todo-add">
                    <Link to={"/todo/store/"}>Criar TODO</Link>
                </div>
                {todos.map(todo => (
                    <article key={todo._id}>
                        <strong>{todo.title}</strong>
                        <Link to={`/todo/show/${todo._id}`}>Ver Detalhes</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === todoInfo.pages} onClick={this.nextPage}>Proximo</button>        
                </div>
            </div>
        )
    }
}