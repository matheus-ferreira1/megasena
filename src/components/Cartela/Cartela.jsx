import React from 'react'
import './Cartela.scss'

let cartela = []

for (let i = 1; i <= 60; i++) {
   cartela.push(('0' + i).slice(-2))
}

console.log(cartela)

export default function Cartela() {


  return (
    <form className="num-wrapper">
      <h2>Megasena</h2>
      <div className='numbers'>
        {cartela.map((number) => (
          <h6 key={number}>{number}</h6>
        ))}
      </div>
    </form>
  )
}
