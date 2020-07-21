import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "../pages/main"
import TodoCreate from "../pages/todo-create"
import TodoUpdate from "../pages/todo-update"
import Todo from "../pages/todo"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/todo/store/" component={TodoCreate}/>
            <Route path="/todo/show/:id" component={Todo}/>
            <Route path="/todo/update/:id" component={TodoUpdate}/>
        </Switch>
    </BrowserRouter>
)

export default Routes