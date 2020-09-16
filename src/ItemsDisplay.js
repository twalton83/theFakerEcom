import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { random } from 'faker'

import {getItems} from './helpers'
 
export default class ItemsDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            sorted : null,
            category : this.props.category,
            data : []
        }
        this.fetchItems = this.fetchItems.bind(this)
        this.generateCards = this.generateCards.bind(this)
    }
    componentDidMount(){
        this.generateCards()
    }
    fetchItems(){
       let data = getItems()
       console.log(data)
    }

    generateCards(){
        let items = getItems()
        this.setState({
            data: [...this.state.data, ...items]
        })
    }
 
    render() {
        return (
            <div className = "h-auto grid grid-cols-4 w-4/5" onScroll={this.handleScroll}>
                {this.state.data.map(item=>(
                      <ItemCard 
                      key = {random.uuid()} 
                      item = {item}
                      />
                ))}
            </div>
        )
    }
}
