
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../ItemDetail/CartContext'
import { Link } from 'react-router-dom'



const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <div className='float-end text-end text-decoration-none align-middle'>
      <div className='collapse navbar-collapse text-white float-end text-decoration-non'>
        <Link className='text-white float-end text-decoration-none' to="/cart"><FontAwesomeIcon icon={faCartShopping} /> ( {totalQuantity} )</Link>

      </div>
    </div>
  )
}

export default CartWidget