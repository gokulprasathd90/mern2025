import React from 'react';
import Child from "./components/Child";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
    return (
        <div>
            App
            <Child />
            <Home />
            <About />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;