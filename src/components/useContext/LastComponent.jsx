import React from 'react'
import { useContext } from 'react'
import MoviesContext from './MoviesContext'

const LastComponent = () => {
    const myData = useContext(MoviesContext)
    console.log(myData)
  return (
    <>
    <div>V poslednej komponente sa vykreslia dáta poslané z hlavnej komponenty bez props drillingu..</div>
    <div className='useContextDataResult'>{myData.map((oneObject) => {
        return(
            <p key={oneObject.id}>{oneObject.name}</p>
        )
    })}</div>


    </>
  )
}

export default LastComponent