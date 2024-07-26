import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'




const CartWidget = () => {
  return (
    <div className='float-end text-end'>
      <div className='collapse navbar-collapse text-white float-end'>
        <a className='text-white text-end float-end' href=""><FontAwesomeIcon icon={faCartShopping} /></a>
      </div>
    </div>
  )
}

export default CartWidget