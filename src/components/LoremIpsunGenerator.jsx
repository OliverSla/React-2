
import { useState } from 'react'
import loremData from '../data/loremData' 

const LoremIpsunGenerator = () => {

const [count, setCount] = useState(0)
const [generatedData, setGeneratedData] = useState([])

const submitHandler = (e) => {
    e.preventDefault()

    const amout = parseInt(count)
    count >= 0 ? setGeneratedData(loremData.slice(0,amout)) : setGeneratedData(loremData.slice(0,0))
    

    setCount(0)
}

const numberOfParagraphsHandler = (e) => {
    setCount(e.target.value)
}

  return (
    <>
    <div className='loremIpsunGenerator'>
        <h2>Lorem ipsun generátor</h2>
        <form onSubmit={submitHandler}>
            <input type="number" onChange={numberOfParagraphsHandler} value={count}/>
            <input type="submit" value="Vygenerovať"  />
        </form>

    </div>

        <div className='generatorResult'>
            {generatedData.map((oneParagraph,index) => {
                const {text} = oneParagraph
                return(
                    <div key={index} className='oneParagraph'>
                        <p>{index + 1}</p>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
        </>
  )
}

export default LoremIpsunGenerator