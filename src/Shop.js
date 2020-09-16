import React, { Component } from 'react'
import ItemsDisplay from './ItemsDisplay'

export default class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            category : "default"
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }

    handleCategoryChange = (e) => {
        this.setState({
            category : e.target.value
        })
    }
    

   
    render() {
        return (
            <div className = "h-full container flex flex-col items-center mx-auto">
                <div>
                <h1 className = "text-3xl font-bold">Products</h1>
                <label htmlFor="category-select">Category:</label>
                <select name="category" id="category-select" onChange={this.handleCategoryChange}>
                    <option value="default">Default</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="vegetable">Vegetables</option>
                    <option value="fruit">Fruit</option>
                    <option value="dry goods">Dry Goods</option>
                </select>
                </div>
              

                <ItemsDisplay category={this.state.category}/>
            </div>
        )
    }
}
