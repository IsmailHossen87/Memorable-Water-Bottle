import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { addItem, getItemLs } from '../../Utilities/localStorage'

export default function Bottles() {
    const [bootles,setBottles] = useState([])

    useEffect(() =>{
        fetch('Bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    useEffect(()=>{
      if(bootles.length){
        const getStoreCard = getItemLs();
        const saveCart =[]
        for(const id of getStoreCard){
          const bottle = bootles.find(bottle => bottle.id === id)
          if(bottle){
            saveCart.push(bottle)
          }
        }
        setCart(saveCart)
      }
      },[bootles])
    
    // handale data ----------------------
    const [cart,setCart] = useState([])
    const clickHandleData = (data)=>{
        const array = [...cart,data]
        setCart(array)
        addItem(data.id)
    }
  return (
    <div>
    <div>
         <h1>Add Parchase : {cart.length}</h1>
         <div className='innerContain'>
            {
                cart.map(car => <img key={car.id} src={car.img}></img>)
            }
         </div>
    
    </div>
     <div className='bottles'>
     {
        bootles.map(botle => <Bottle 
        key={botle.id}
        dataPause = {clickHandleData}
        Botle = {botle}
        ></Bottle>
            )
      }
     </div>
      
    </div>
  )
}
