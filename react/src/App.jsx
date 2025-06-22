import React from 'react';
import Child from "./components/child";
import  Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact'
import { Routes } from 'react-router-dom';

 const App= () => {
  var fruit=["apple","banana","orange"];
    return (
      <>
         <div>{/*
          <Child name="gokul"/>
          <Child name="prasath"/>
          <About/>
          <Home/>
          <Skills/> 
          <Contact/>*/}
          <Navbar/>
          <Routes/>
          <Route path='/home' element={<Home items ={fruit}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/> 
        </div> 
      </>
    )
}

export default App
