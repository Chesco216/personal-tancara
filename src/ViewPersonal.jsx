import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { getPersonal } from './assets/getPersonal'
import { PersonalCard } from './components/PersonalCard'

export const ViewPersonal = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getPersonal().then(res => setData(res))
  }, [])

  return (
    <>
      <Header/>
      {
        // console.log(data)
        data.map( ele => {
          return (
            <PersonalCard key={ele.id} id={ele.id} name={ele.name}/>
          )
        })
      }
    </>
  )
}
