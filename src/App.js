import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <div className='div' >
      <ItemListContainer name="Ernesto" trabajo="React JS"/>
    </div>
    </>
  );
}

export default App;
