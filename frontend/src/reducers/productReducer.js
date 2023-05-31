export default function productReducer (product, action) { //product is state
    switch (action.type) {
        case 'delete-product':
            // remove an object from the array
            // filter the array looking for the id
            console.log(action.id)
            return product;
    
        default:
            alert('No matching types!')
            return product;
    }
}