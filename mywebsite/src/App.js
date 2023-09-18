import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Homepage from './components/homepage';

class App extends React.Component {
  render(){
    return(
      <div className='App'>
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

export default App;
