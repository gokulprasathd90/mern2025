import React from 'react';
import Child from "./components/child";
import  Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact'

 const App= () => {
    return (
        <div>
           <Child/>
          <About/>
          <Home/>
          <Skills/> 
          <Contact/>
        </div>
    )
}

export default App
 