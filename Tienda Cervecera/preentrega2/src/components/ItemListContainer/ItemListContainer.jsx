
import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  console.log(categoryId)


  useEffect(()=>{
    const asyncFunctions = categoryId ? getProductByCategory : getProducts
    const products = asyncFunctions(categoryId)
      products.then((res)=>{
        setProducts(res)
        console.log(res)
      })
  },[categoryId])

  

  return (
    <div className='container-fluid bg-dark text-white p-3 gap-1 align-items-center'>
      <div className='text-center'>
        <h1 className=''>{greeting}</h1>
      </div>
      <div className="listaProductos container align-items-center p-3">
        <ItemList products={products} />
      </div>      
    </div>
  )
}

export default ItemListContainer