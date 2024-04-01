import React from 'react'
import './PersonalCard.css'

export const PersonalCard = ({ id, name }) => {

  const deleteUser = async ( event ) => {
    const id = event.target.id
    await fetch(`http://127.0.0.1:3000/personal/${id}`, { method: 'DELETE' })
  }

  return (
    <div className='card-container'>
      <label className='card-label'>{id} :</label>
      <label className='card-label'>{name}</label>
      <button onClick={ deleteUser } id={id} className='delete-user-button'>x</button>
    </div>
  )
} 
