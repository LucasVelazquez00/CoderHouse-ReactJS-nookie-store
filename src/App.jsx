import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './Components/CartContext/CartContext';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter> 
    <NavBar/>

    <div className='div'>
      <Routes>

      <Route exact path='/' element={<ItemListContainer name="Profe Alex" trabajo="React JS"/>}/>
      <Route path='/category/:category' element={<ItemListContainer name="Profe Alex" trabajo="React JS"/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
      </Routes>
    </div>
    
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
