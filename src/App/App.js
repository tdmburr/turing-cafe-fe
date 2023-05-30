import React, { Component } from 'react';
import apiCalls from '../apiCalls'
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

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

  addReservation = (newReservation) => {
    this.setState({ allReservations: [...this.state.allReservations, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
