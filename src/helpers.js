//import axios from 'axios';
import data from './data.json'


const filterItems = (category) =>{
    return category === 'default' ? data : data.filter(item =>
        item.category.includes(category)
        )

}

const upperCaseName = (string)=> string.split('')[0].toUpperCase() + string.slice(1)



export {upperCaseName, filterItems}