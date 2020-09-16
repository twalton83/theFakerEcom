import React from 'react'
import './ItemCard.css'
import {upperCaseName} from './helpers'

export default function ItemCard(props) {
    const item = props.item
    return (  
        <div className= "h-64 flex flex-col m-2">
            <div className = "h-full ItemCard-image" style={{backgroundImage:`url(${item.image})`}}>
                
            </div>

            <p className="text-lg font-semibold">{upperCaseName(item.name)}</p>
            <p>${item.price}</p>
            <button className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded m-auto' >Add To Cart</button>
        </div>
    )
}
