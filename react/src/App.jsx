import React from 'react'
import Child from './components/Child'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Counter from './Pages/Counter'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import Hooks from './Pages/Hooks'
import State from './Hooks/State'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/child" element={<Child name="Gowthamm"/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/hooks" element={<Hooks/>} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/effect2" element={<Effect2 />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/state" element={<State />} />
      </Routes>
    </div>
  )
}

export default App

