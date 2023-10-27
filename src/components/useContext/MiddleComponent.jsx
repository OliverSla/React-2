import React from 'react'
import NextComponent from './NextComponent'

const MiddleComponent = ({newFilms}) => {
  return (<>
    <button onClick={() => { console.log(newFilms) }}> Vykonzolovanie objektov cez props </button>
    <NextComponent />
    </>
  )
}

export default MiddleComponent