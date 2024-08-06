
import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  console.log(categoryId)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const asyncFunctions = categoryId ? getProductByCategory : getProducts
    const products = asyncFunctions(categoryId)
      products.then((res)=>{
        setProducts(res)
        console.log(res)
      })
      .catch(error =>{ 
        console.log(error)
      })
      .finally(()=>{
        setLoading(false)
      })
  },[categoryId])

  if(loading) {
    return <h1 className="text-center bg-dark text-white">Cargando...</h1>
  }
  

  return (
    <div className='container-fluid  bg-dark text-white p-3 gap-1 align-items-center'>
      <div className='text-center'>
        <h1 className=''>{greeting}</h1>
      </div>
      <div className="listaProductos container d-grid align-items-center p-3">
        <div className="col" ><ItemList products={products} /></div>
        
      </div>      
    </div>
  )
}

export default ItemListContainer