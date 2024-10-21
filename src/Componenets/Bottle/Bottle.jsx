import React from 'react'
import './Bottle.css'

export default function Bottle({Botle,dataPause}) {
    const {id,img,name,price} = Botle
  return (
    <div className='botle'>
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p>Price : {price}</p>
        <button onClick={()=>dataPause(Botle)}>Purchase</button>
    </div>
  )
}
