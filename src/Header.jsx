import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <NavLink to='/'>
        <span style={{margin:20}}>
          create
        </span>
      </NavLink>

      <NavLink to='/personal'>
        <span style={{margin:20}}>
          view
        </span>
        </NavLink>

    </div>
  )
}
