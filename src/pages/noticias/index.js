import React, { Component} from "react"
// import Api from "../../services/api"
import Api from "./noticias.json"
import "./style.css"
// import {Link} from "react-router-dom"

export default class Noticias extends Component{
    
    constructor(){
        super()

        this.state = {
            noticias: [],
            noticiasInfo: {},
            page: 1
        }
    }

    // metodo pra preencher o objeto todo
    componentDidMount(){
        this.loadNoticias()
    }

    // carregando pagina com noticias com objetos
    // loadNoticias = async(page = 1) => {
    //     const response = await Api.get(`/todo/index?page=${page}`)
    //     const {docs, ...noticiasInfo} = response.data
    //     this.setState({
    //         noticias: docs, noticiasInfo, page
    //     })
    // }

    // carregando pagina com noticias simuladas
    loadNoticias = (page = 1) => {
        const response = Api
        const {docs, ...noticiasInfo} = response
        this.setState({
            noticias: docs, noticiasInfo, page
        })
    }

    // ir pra outra pagina, se houver
    prevPage = () => {
        const {page} = this.state

        if(page === 1) 
            return
        
        const pageNumber = page - 1
        this.loadNoticias(pageNumber)
    }

    // voltar pra outra pagina, se houver
    nextPage = () => {
        const {page, noticiasInfo} = this.state

        if(page === noticiasInfo.pages) 
            return
        
        const pageNumber = page + 1
        this.loadNoticias(pageNumber)
    }

    // metodo para renderizar a pagina
    render(){
        const { noticias, page, noticiasInfo } = this.state
        return (
            <div className="noticias">
                {noticias.map(noticias => (
                    <article key={noticias._id}>
                        <h1>{noticias.title}</h1>
                        <p>{noticias.createdAt}</p>
                        <img src={noticias.img} alt="erro no carregamento da imagem"/>
                        <p>{noticias.description}</p>
                        <a target="_blank" rel="noopener noreferrer" href={noticias.link}>Clique para ler</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === noticiasInfo.pages} onClick={this.nextPage}>Proximo</button>        
                </div>
            </div>
        )
    }
}