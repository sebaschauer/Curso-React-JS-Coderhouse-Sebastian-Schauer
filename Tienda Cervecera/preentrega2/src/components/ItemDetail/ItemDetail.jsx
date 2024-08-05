import { useState,useContext} from "react"
import Counter from "../Counter/Counter"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"
//import { CartContext } from "./CartContext"


const ItemDetail = ({ id,img, name, category, subcategory, description, price, stock }) => {
  
  const [quantity, setQuantity] = useState(0)

  //const {addItem,isInCart} = useContext(CartContext)
  const {addItem, isInCart} = useCart()
  
  const handleAdd = (cantidad) => {

    const productObject = {
      id, name, price, quantity: cantidad 
    }
    addItem(productObject)

   /* const objectoAgregado = {
      id, name, price
    }
    console.log(objectoAgregado)
    console.log("agregue al carrito", cantidad)
    setQuantity(cantidad)*/
  }
  
  
  return (
    <div className="card bg-dark text-white border border-white p-2 text-center">
      <div className="card bg-dark p-1" >
        <img className="imgProduct img-fluid rounded mx-auto bg-dark  " src={img} alt="img" />
      </div>
      <div className='card-body text-white'>
        <div className="p-2">
          <h3 className="card-title text-white">{name}</h3>
        </div>
        <div className="p-2">
          <h4 className="card-text">{category}</h4>
        </div>
        <div className="p-2">
          <h4 className="card-text">{subcategory}</h4>
        </div>
        <div className="p-2">
          <p className="card-text">{description}</p>
        </div>
        <div className="p-1">
          <strong>${price}</strong>
        </div>
        <div className="p-3">
          <strong>Stock : {stock}</strong>
        </div>
        <div>
          {
            isInCart(id) ?  (              
              <Link to="/cart"><button className="rounded p-2" type="button">Finalizar Compra</button></Link>
            ):  (<Counter stock={stock} onAdd={handleAdd} />)
          }
          
        </div>
        {/*<div className="p-3 ">
          <button className="rounded"  type="button">Agregar al Carrito</button>
        </div>*/}
      </div>
    </div>
  )
}

export default ItemDetail