import Item from "../Item/Item"
import './ItemList.css'





const ItemLIst = ({ products }) => {

    
  return (
    <div className="ContListItem d-grid col align-items-center p-3">
     { products.map( product => <Item  key={product.id} product={product} />)}
      
    </div>
  )
}

export default ItemLIst