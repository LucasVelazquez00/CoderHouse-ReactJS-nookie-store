import './App.css';
import NavBar from './Components/NavBar/NavBar';
//import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar/>
    <div className='div' >
      {/*<ItemListContainer name="Ernesto" trabajo="React JS"/>*/}
      <ItemDetailContainer/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
