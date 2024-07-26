
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Search from './components/Search/Search'
import {ReactBrowser} from 'react-router-dom'







function App() {


  return (
    <>
    
      <NavBar/>
      <Search/>
      <ItemListContainer greeting={"Bienvenidos a mi tienda cervecera!!"}/> 
    
      
    </>
  )
}

export default App
