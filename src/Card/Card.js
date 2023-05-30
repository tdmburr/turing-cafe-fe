import React from 'react'
import './Card.css'

const Card = ({id, name, date, time, number}) => {
  return (
    <div className='card' id={id}>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of Guests: {number}</p>
    </div>
  )
}

export default Card