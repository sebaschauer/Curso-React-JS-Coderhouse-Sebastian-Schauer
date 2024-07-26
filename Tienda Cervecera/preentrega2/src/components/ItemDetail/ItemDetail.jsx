import Counter from "../Counter/Counter"


const ItemDetail = ({ img, name, category, subcategory, description, price, stock }) => {
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
          <Counter stock={stock}/>
        </div>
        <div className="p-3 ">
          <button className="rounded" type="button">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail