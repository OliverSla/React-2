import React from 'react'
import PropTypes from 'prop-types'

const Book = ({id, name}) => {
  return (
    <div className='oneBook'>
        <h2>{name}</h2> {/* Alebo => name || "Defaultná hodnota" */}   
        <p>{id}</p>
    </div>
  )
}

Book.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

Book.defaultProps = {
    name: "Defaultný názov filmu",
    id: "123"
}

export default Book