import React from 'react'
import './Welcome.css'
import {Link} from 'react-router-dom'

export default function Welcome() {
    return (
        <div className= "hero flex items-center justify-center">
            <button class="bg-white hover:bg-green-900 text-bluefont-bold text-xl py-4 px-6 rounded">
                <Link to="/shop">
                Shop Now
                </Link>
               
            </button>
        </div>
    )
}
