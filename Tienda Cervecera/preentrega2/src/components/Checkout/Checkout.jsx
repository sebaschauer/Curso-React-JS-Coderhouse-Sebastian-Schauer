
import { useState } from 'react'
import { useCart } from '../ItemDetail/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Checkout = () => {
 
    const [loading, setLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    
    const {cart, totalQuantity, getTotal} = useCart()
    const total = getTotal()
    
    
    const createOrder = async () => {
        setLoading(true)
        try{
            const objOrder = {
                buyer: {
                    firstName:"Seba",
                    lastName:"Schauer",
                    phone:"2235039877",
                    address:"Jujuy 1881"
                }, 
                items:cart,
                totalQuantity, 
                total, 
                date: new Date()
            }
            console.log(objOrder)
            const ids = cart.map((item)=>item.id)
            const productRef = collection(db, "productos")
            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in" ,ids))
            )
            const {docs} =productsAddedFromFirestore;

            const outOfStock = []

            const batch = writeBatch(db)
            docs.forEach((doc)=>{
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
                const productAddedToCart = cart.find((prod)=> prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity;
                if(stockDB >= productQuantity){
                    batch.update(doc.ref, {stock:stockDB - productQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder);
                console.log({orderAdded})
                // limpiar carrito
                setOrderCreated(true)
            } else{
                console.log("Hay productos fuera de stock")
            }

        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }

        
    }

    if (loading){
        return <h1 className='text-center'>Se esta generando la orden</h1>
    }
     if (orderCreated){
        return <h1 className='text-center'> Pedido completado con exito!!</h1>
     }

  return (
    <div className='container-fluid p-3 bg-dark text-center align-items-center text-white'>
        <div>
            <h1>Checkout</h1>
        </div>
        <div>
            <button className='btn btn-danger rounded p-1' type="button">Cancelar Pedido</button>
            <button className='btn btn-success rounded p-1' onClick={createOrder} type="button">Continuar al Pago</button>
        </div>
    </div>
  )
}

export default Checkout