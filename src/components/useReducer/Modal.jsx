import React from 'react'
import { useEffect } from 'react'

const Modal = ({notification, clodeNotification}) => {

  useEffect(() => {

    setTimeout(() => {
      return(
        clodeNotification()
      )
    }, 1200)
  })

  return (
    <div className='notification'>{notification}</div>
  )
}

export default Modal