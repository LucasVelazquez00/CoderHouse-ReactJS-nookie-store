import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <div className='div' >
      <ItemListContainer name="Ernesto" trabajo="React JS"/>
    </div>
    </>
  );
}

export default App;
