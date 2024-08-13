

const CartItem = ({id, name, quantity, price, img}) => {
  return (
    <div className="container-fluid text-center align-items-center text-white">
        <article className="d-block p-3">
            <section className="p-1">
                <img height={100} width={100} src={img} alt="" />
            </section>
            <header className="p-1">
                <h3>{name}</h3>
            </header>
            <section className="p-1" >
                <p> Cantidad: {quantity}</p>
                <p> Precio: {price}</p>
            </section>
        </article>
    </div>
  )
}

export default CartItem