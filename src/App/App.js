import React, { Component } from 'react';
import apiCalls from '../apiCalls'
import './App.css';
import Reservations from '../Reservations/Reservations';

console.log(apiCalls())

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  componentDidMount() {
    apiCalls()
      .then(data => this.setState({allReservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
