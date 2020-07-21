import React from 'react'
import Header from "./components/Header"
import "./styles/style.css"
import Routes from "./routes/routes"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <div className="App">
      <Header/>
      <ToastContainer/>
      <Routes/>
  </div>
)

export default App;
