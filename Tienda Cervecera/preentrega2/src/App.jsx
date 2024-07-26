
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Search from './components/Search/Search'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a mi tienda cervecera!!"}/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='*' element={<h1 className='text-center'> :(  404 not Found</h1>} />
      </Routes>
        
      
        
      
    </BrowserRouter>
  )
}

export default App
