import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Inspiration from './pages/Inspiration';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={()=> <Work />} />
        <Route path="/about" render={()=> <About />} />
        <Route path="/contact" render={()=> <Contact />} />
        <Route path="/inspiration" render={()=> <Inspiration />} />
      </div>
    );
  }
}

export default App;
