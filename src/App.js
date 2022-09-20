import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './Components/CartContext/CartContext';

function App() {
  return (
    <>
    <CartContext.Provider value={[]}>
    <BrowserRouter> 
    <NavBar/>

    <div className='div' >
      <Routes>

      <Route exact path='/' element={<ItemListContainer name="Ernesto" trabajo="React JS"/>}/>
      <Route path='/category/:category' element={<ItemListContainer name="Ernesto" trabajo="React JS"/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      
      </Routes>
    </div>
    
    <Footer/>
    </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}

export default App;
