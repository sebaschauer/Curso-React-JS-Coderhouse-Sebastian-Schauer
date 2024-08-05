import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import { useState, useEffect, useContext } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {

    
    const [product, setProduct] = useState(null)
    const {productId} = useParams()
    //console.log(productId)
    
    
    
    useEffect(() => {
        getProductById(productId)
            .then((res) => {
                setProduct(res);
                //console.log(res);
            })
            .catch((err) => {
                console.log(err);
            } )
    },[productId])

  return (
    <div className="container-fluid bg-dark p-3">
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer