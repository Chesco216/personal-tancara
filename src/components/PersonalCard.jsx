import React from 'react'
import './PersonalCard.css'

export const PersonalCard = ({ id, name }) => {
  return (
    <div className='card-container'>
      <label>{id}</label>
      <label>{name}</label>
    </div>
  )
} 
