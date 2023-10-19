import React from 'react'

const SpreadRestOperator = () => {


  const sum = (...numbers) => {
    let result = 0

    for(const i of numbers ){
      result = result + i // result += i
    }
    return result
  }


  return (
    <div className='spreadAndRestOperator'>
    <div className='spread'>
    <p>{sum(1,5,2,2,20)}</p>
    </div>
</div>
  )
}

export default SpreadRestOperator