import React from 'react'

const SpreadRestOperator = () => {

    const myArray = ["Harry", "Ron"]
    const mySecArray = [...myArray, "Hermiona"]

    const myArray2 = [1,2,3]

    const myFunc1 = (a, b, c) => {
        return a + b + c 
    }

    console.log(myFunc1(...myArray2))

    const myArray3 = ["Ron", "Hermiona", "Harry"]
    const myArray4 = [...myArray3, "Dobby"]

    console.log(myArray4)
    console.log(myArray3)

  return (
    <div className='spreadAndRestOperator'>
    <div className='spread'>
        {mySecArray.map((name,index) => {
            return <p key={index}>{name}</p>
        })}
    </div>
</div>
  )
}

export default SpreadRestOperator