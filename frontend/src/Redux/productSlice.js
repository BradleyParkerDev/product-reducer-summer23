import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        deleteProduct:(product, action) =>{
            // remove an object from the array
            // filter the array looking for the id
            console.log(action)

            // let filteredArray = product.filter(element => element.id !== action.id)
            let filteredArray = product.filter(element => element.id === action.payload ? false : true)
            return filteredArray;
        },
        editProduct: (state,action) =>{
            // take in the edited object (action.editedObj) and replace the original with it.
            // map through product state, if element.id matches the edited obj id, replace it, else return original
            // let editedArray = product.map(element =>  {
                //     if (element.id === action.editedObj.id) {
                    //         return action.editedObj
                    //     } else {
                        //         return element
                        //     } 
                        // })
            console.log(action)
            let editedArray = state.map(element =>  element.id === action.payload.id ? action.payload : element) 
            return editedArray
        },
        addProduct: (state) =>{
            // creates new empty object
            let newProduct = {
                id: uuidv4(),
                title: "",
                publisher: "", 
                genre: "",
                price: 0    
              }
            // inserts object into the index=0 of the state array
            let addArray = [
                newProduct,
                ...state
            ];
            return addArray // return to useReducer, which sets the state
        },
        getProducts: (state, action)=>{
            console.log(action.payload)
            return action.payload  //sets the payload data to the product state

        },
        addStore: (state,action)=>{
            console.log(action.payload)
            let payloadArr = action.payload.map(element => {
                return {
                        id: element.id,
                        title: element.gameTitle,
                        publisher: element.publisherName,
                        genre: element.genre,
                        price: element.MSRP
                        }
            })
            // console.log(payloadArr)
            return [...payloadArr, ...state]
        },
    },
});


export const { deleteProduct, editProduct, addProduct, getProducts, addStore } = productSlice.actions;
export default productSlice.reducer;






/*

import {v4 as uuidv4} from 'uuid'

export default function productReducer (product, action) { //product is state
    switch (action.type) {
        case 'delete-product':
            // remove an object from the array
            // filter the array looking for the id
            console.log(action.id)

            // let filteredArray = product.filter(element => element.id !== action.id)
            let filteredArray = product.filter(element => element.id === action.id ? false : true)
            return filteredArray;
        case 'edit-product':
            // take in the edited object (action.editedObj) and replace the original with it.
            // map through product state, if element.id matches the edited obj id, replace it, else return original
            // let editedArray = product.map(element =>  {
                //     if (element.id === action.editedObj.id) {
                    //         return action.editedObj
                    //     } else {
                        //         return element
                        //     } 
                        // })
            let editedArray = product.map(element =>  element.id === action.editedObj.id ? action.editedObj : element) 
            return editedArray
        case 'add-product':
            // creates new empty object
            let newProduct = {
                id: uuidv4(),
                title: "",
                publisher: "", 
                genre: "",
                price: 0    
              }
            // inserts object into the index=0 of the state array
            let addArray = [
                newProduct,
                ...product
            ];
            return addArray // return to useReducer, which sets the state
        case 'get-products':
            return action.payload  //sets the payload data to the product state
        case 'add-store':
            // console.log(action.payload)
            let payloadArr = action.payload.map(element => {
                return {
                        id: element.id,
                        title: element.gameTitle,
                        publisher: element.publisherName,
                        genre: element.genre,
                        price: element.MSRP
                        }
            })
            // console.log(payloadArr)
            return [...payloadArr, ...product]
        default:
            alert('No matching types!')
            return product;
    }
}

*/