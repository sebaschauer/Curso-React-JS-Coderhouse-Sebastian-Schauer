import React from 'react'
import { useCart } from '../ItemDetail/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
const {cart, getTotal, totalQuantity } = useCart()
const total = getTotal()

if (totalQuantity === 0){
    return <h3 className='text-center'>No hay productos en el carrito</h3>
}

  return (
    <div className='container-fluid bg-dark text-center text-white align-items-center'>
        {cart.map((item)=>(
            <CartItem  key={item.id} {...item}/>
        ))}
        <h2> Total: ${total}</h2>
        <div className='container align-items-center p-2 g-2'>
            <button className='btn btn-danger rounded ' type="button">Vaciar Carrito</button>
            <Link to="/checkout"><button className='btn btn-success rounded ' type="button">Finalizar Compra</button></Link>
        </div>
        
    </div>
  )
}

export default Cart