import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { random } from 'faker'

 
export default class ItemsDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }

    }
   
    render() {
        return (
            <div className = "h-auto grid grid-cols-4 w-4/5" onScroll={this.handleScroll}>
                {this.props.items.map(item=>(
                      <ItemCard 
                      addToCart = {this.props.addToCart}
                      key = {random.uuid()} 
                      item = {item}
                      />
                ))}
            </div>
        )
    }
}
