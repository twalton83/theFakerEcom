//import axios from 'axios';
import data from './data.json'


const getItems = () =>{
   
    let items = data;
    return items
   
}

const upperCaseName = (string)=> string.split('')[0].toUpperCase() + string.slice(1)


export {getItems, upperCaseName}