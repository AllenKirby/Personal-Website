import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Homepage from './components/homepage';
import About from './components/about'

class App extends React.Component {
  render(){
    return(
      <div className='App'>
        <NavBar />
        <Homepage />
        <About />
      </div>
    );
  }
}

export default App;
