import React from 'react'
import Header from './components/Header'
import User from './components/User'
import Github from './components/Github'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:userid' element={<User />} />
        <Route path='/github' element={<Github />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App