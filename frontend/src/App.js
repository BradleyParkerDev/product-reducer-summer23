import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import {v4 as uuidv4} from 'uuid'
// import productReducer from './reducers/productReducer'
import { addProduct, getProducts, addStore, deleteProduct, editProduct } from './Redux/productSlice';
import ProductCard from './Components/ProductCard';

function App() {
 
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product)
  // const [product, dispatch] = useReducer(productReducer, [])
  useEffect(() => {
  const loadData = async () => {
    const response = await fetch('http://localhost:4000/api/products/get-all-products')
    const data = await response.json()
    console.log(data)
    dispatch(getProducts(data))
  }
  loadData()
 }, [])
 

  const getAPIdata = async () => {
  const response = await fetch('http://localhost:4000/api/store/list-products')
  const data = await response.json()
  console.log(data)
  dispatch(addStore(data))
  }
  

  return (

    <div className="App">
      <h1>Video Game Products</h1>
      <button onClick={
        () => dispatch(addProduct())
      }>Add Product</button>

      <button onClick={getAPIdata}>API</button>
      
      {
        product.map((element) => {
          return (
          <ProductCard
            key={element.id}
            id={element.id}
            title={element.title}
            publisher={element.publisher}
            genre={element.genre}
            price={element.price}
            deleteProduct = {
              (id) => dispatch(deleteProduct(id))
            }
            editProduct = {
              (param) => dispatch(editProduct(param))
            }
          /> 
          )
        })
     }
    </div>
  );
}

export default App;
