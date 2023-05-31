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
        
        default:
            alert('No matching types!')
            return product;
    }
}