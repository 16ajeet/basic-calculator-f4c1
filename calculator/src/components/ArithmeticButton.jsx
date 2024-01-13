import React from 'react'

const ArithmeticButton = ( {operation, onClick}) => {
  return (
    <button onClick={ () => onClick(operation)}>
        {operation}
    </button>
  )
}

export default ArithmeticButton;