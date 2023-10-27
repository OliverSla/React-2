import React from 'react'
import formNotificationData from '../../data/formNotificationData'
import MiddleComponent from './MiddleComponent'
import MoviesContext from './MoviesContext'

const PrimaryComponent = () => {

    const newFilms = [...formNotificationData, {name: "Harry Potter", id: 123}]

    
  return (
    <div className='primary_component'>
    <MoviesContext.Provider value={ newFilms } >
    <MiddleComponent newFilms={newFilms} />
    </MoviesContext.Provider>
    </div>
  )
}

export default PrimaryComponent