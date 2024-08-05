
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../ItemDetail/CartContext'



const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <div className='float-end text-end text-decoration-none align-middle'>
      <div className='collapse navbar-collapse text-white float-end text-decoration-non'>
        <a className='text-white text-end float-end text-decoration-none' href=""><FontAwesomeIcon icon={faCartShopping} /> ( {totalQuantity} )</a>

      </div>
    </div>
  )
}

export default CartWidget