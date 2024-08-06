import { useParams } from "react-router-dom";
//import { getProductById } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { doc, getDoc,} from "firebase/firestore";
import { db } from "../../services/firebase";


const ItemDetailContainer = () => {

    
    const [product, setProduct] = useState(null)
    const {productId} = useParams()
    //console.log(productId)
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {

        getDoc(doc(db, "productos", productId))
            .then((querySnapshot)=>{
                const product = {id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product)
            })
        //getProductById(productId)
            //.then((res) => {
               // setProduct(res);
                //console.log(res);
           // })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[productId])



  return (
    <div className="container-fluid bg-dark p-3">
        {loading ? <h3 className="text-center bg-dark text-white">Cargando producto...</h3> : <ItemDetail {...product}/>}
        
    </div>
  )
}

export default ItemDetailContainer