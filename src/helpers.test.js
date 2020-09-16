import {getItems, upperCaseName} from './helpers.js'
import axios from 'axios'


describe('uppercase letters', ()=>{
    test('capitalizes the first letter', ()=>{
        expect(upperCaseName('test')).toMatch(/Test/)
        
    
    })
    
})

describe('gets requested items', ()=>{
    const testObj = [{
        "name" : "eggs",
        "description" : "Farm Fresh Eggs from a free range farm.",
        "price" : "3.99",
        "image" : "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "category" : ["dairy"]
    }]
    test('fetches items from json', ()=>{
        expect(getItems()).toEqual(expect.arrayContaining(testObj))
    })
    test('fetches items from specific category', ()=>{
        const test = (category) =>{
            let items = getItems().filter(item =>
                item.category.includes(category)
                )
                console.log(items)
                return items
        }
        const meatObj = [{
            "name" : "filet mignon",
            "description" : "High quality steak - grass fed.",
            "price" : "20.99",
            "image" : "https://images.unsplash.com/photo-1496113811466-78d040e80004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            "category" : ["meat"]
        }]
        expect(test('meat')).toEqual(expect.arrayContaining(meatObj))
    })
})