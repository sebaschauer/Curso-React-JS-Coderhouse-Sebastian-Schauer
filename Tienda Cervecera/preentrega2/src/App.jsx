
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartProvider } from './components/ItemDetail/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { NotificationProvider } from './components/Context/NotificationContext'


function App() {

  

  return (
    <BrowserRouter >
    <NotificationProvider >
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a mi tienda cervecera!!"}/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h1 className='text-center'> :(  404 not Found</h1>} />
      </Routes>
      </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
