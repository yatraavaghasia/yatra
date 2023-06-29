import React from 'react'
import './CrewCard.css'
export default function CrewCard() {
  return (
    <div className='crew-card'>
        <img className='profile' src='crew-image.png'/>
        <a className='name' href="destination_url">Name</a>
        <a className='position' href="destination_url">Position</a>
        <img className='linked-in' src='linkedin.png'/>
    </div>
  )
}
