import React, { useState } from 'react'
import './Cartela.scss'

export default function Cartela() {

  let cartela = []

  for (let i = 1; i <= 60; i++) {
    cartela.push(('0' + i).slice(-2))
  }

  const [numbers, setNumbers] = useState([])
  const [flag, setFlag] = useState(false)

  const handleChange = (event) => {
    const { value, checked } = event.target;
    
    if (checked) {
      setNumbers([...numbers, value])

    } else {
      setNumbers(numbers.filter((e) => e !== value))
    }
  }

  function showResult() {
    const result = numbers
    if (result.length > 6 ) {
      alert('Escolha no máximo 6 números');
    } else {
      generateRandomSix();
      setFlag(true)
    }
  }

  function generateRandomSix() {
    
    const myArray = [];
    while (myArray.length <= 5) {
      const aleatorio = parseInt(Math.random() * (61 - 1) + 1)

      if (myArray.includes(aleatorio)) {
        generateRandomSix()
      } else {
        myArray.push(aleatorio)
      }
    }
    console.log((myArray.sort((n1,n2) => n1 - n2)))

    return myArray.sort((n1,n2) => n1 - n2)
  }
 
  return (
    <form className="num-wrapper">
      <h2>Megasena</h2>
      <div className='numbers'>
        {cartela.map((number) => (
          <label key={number}>
            <input
              type='checkbox'
              value={number}
              onChange={handleChange}
            />
            <span>{number}</span>
          </label>
        ))}
      </div>
      <label >
        <input value={numbers} type="text" disabled/>
      </label>
      <button onClick={showResult} type='button'>Gerar números aleatórios</button>
      <div className="result">
          {flag ? generateRandomSix().map((number) => (
            <div 
              className='resultNumber' 
              key={number}
            >
              {('0' + number).slice(-2)}
            </div>
          )) : ''}
      </div>
    </form>
  )
}
