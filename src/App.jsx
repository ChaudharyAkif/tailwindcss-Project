import React from 'react'
import Home from './pages/Frontend/Home/Home'
import "./App.css"
import Index from './pages/routes'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
  <Navbar />
    <Index />
    <Footer />
    </>
  )
}

export default App