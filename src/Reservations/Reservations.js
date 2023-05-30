import React from 'react'
import './Reservations.css'
import Card from '../Card/Card'

const Reservations = ({allReservations}) => {
  
  const reservation = allReservations.map(reservation => {
    return (
      <Card 
        id={reservation.id}
        key={reservation.id} 
        name={reservation.name} 
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}/>
    )
  })
  return (
    <div className='reservationContainer'>
      {reservation}
    </div>
  )
}


export default Reservations