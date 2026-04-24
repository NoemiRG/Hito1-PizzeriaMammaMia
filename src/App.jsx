import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'


function App() {

  return (
    <>
      <Navbar/>
      {/*<Home/>*/}
      <Login/>
      <Register/>
      <Footer/>
    </>
    
      );
    
}

export default App
