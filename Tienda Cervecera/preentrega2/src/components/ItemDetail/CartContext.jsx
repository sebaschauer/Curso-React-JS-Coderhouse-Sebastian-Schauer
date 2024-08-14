import { createContext, useContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children})=>{


    //definir un carrito
    const [cart, setCart] = useState([])
    console.log(cart)

    //creo funcion para chequear si hay algo ne el carrito
    const isInCart = (id)=>{
        return cart.some(prod => prod.id === id)
    }

    //funcionalidad de Agregar un carrito

    const addItem =(productToAdd)=>{
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        }else{
            console.error("El producto ya esta en el carrito")
        }
    }

    const removeItem = (id) =>{
        const cartUpdated = cart.filter((prod)=> prod.id != id)
        console.log(cartUpdated)
        setCart(cartUpdated)
    }

    const clearCart = ()=>{
        setCart([])
    }

    //funcion totalidad productos en el carrito
    const getTotalQuantity = ()=>{
        let accu = 0;
        cart.forEach(prod =>{
            accu += prod.quantity
        })
        return accu;
    }

    //funcion total
    const getTotal = ()=>{
        let sumando = 0
        cart.forEach((item)=>{
            sumando += item.quantity * item.price
        })
        return sumando
    }


    const totalQuantity = getTotalQuantity()

    const obj={cart,isInCart,addItem, totalQuantity , getTotal, removeItem}

    return(
            <CartContext.Provider value={obj}>
                {children}
            </CartContext.Provider>
    )
}

export const useCart = ()=> {
    return useContext(CartContext)
}