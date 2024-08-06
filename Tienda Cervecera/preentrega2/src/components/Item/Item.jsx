
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import './Item.css'




const Item = ({product}) => {

  return (
    <div className="tarjetaProducto d-grid card bg-dark text-white border border-white p-3 text-center">
      <div className="card bg-dark p-1" >
        <img className="imgProduct img-fluid rounded mx-auto bg-dark  " src={product.img} alt="" />
      </div>
      <div className='card-body'>
        <div className="p-1">
          <h3 className="card-title">{product.name}</h3>
        </div>
        <div className="p-1">
          <strong>${product.price}</strong>
        </div>
        <div className="p-1">
          <Link to={`/detail/${product.id}`} className='btn btn-light p-1'>Ver Detalle</Link>
        </div>
      </div>
    </div>
  )
}

export default Item