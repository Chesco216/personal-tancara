import React from 'react'
import { cargarPersonal } from './assets/createPersonal'
import { Header } from './Header'

export const CreatePersopnal = () => {
  
 const createPerso = (event) => {
    event.preventDefault()
    const fields = new FormData(event.target)
    const nombre = fields.get('nombre')
    const rol = fields.get('rol')
    const prio = fields.get('prio')

    const personal = {
      name: nombre,
      id_rol: rol,
      id_prioridad: prio,
    }
    
    return cargarPersonal(personal)
  } 

  return (
    <>
      <Header/>
      <br/>
      <form onSubmit={ createPerso }>

        <span>
          <label>Nombre</label>
          <input name='nombre' type='text-box'/>
        </span>

        <span>
          <label>Rol</label>
          <select name='rol'>
            <option value={1}>
              admin
            </option>
            <option value={2}>
              user
            </option>
            <option value={3}>
              viewer
            </option>
          </select>
        </span>

        <span>
          <label>Prioridad</label>
          <select name='prio'>
            <option value={1}>
              1
            </option>
            <option value={2}>
              2
            </option>
            <option value={3}>
              3
            </option>
          </select>
        </span>

        <button type='submit'>Create personal</button>

      </form>
    </>
  )
}
