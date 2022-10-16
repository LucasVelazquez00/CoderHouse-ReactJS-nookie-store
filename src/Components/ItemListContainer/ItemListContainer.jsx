//componente que muestra los productos
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig/firebaseConfig";
import { collection, getDocs, where, query} from "firebase/firestore";
import "./ItemListContainer.css";
const ItemListContainer = (prop) => {


  const [data, setData] = useState([]);

  const { category } = useParams();

  useEffect(()=> {async function getData ()  {
    if (category){
    const qery = query(collection(db, "productos"), where('category', '==', category))
    const querySnapshot = await getDocs(qery)
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))

    setData(dataFromFirestore)
      
    }else{ const querySnapshot = await getDocs(collection(db, "productos"));
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))

    setData(dataFromFirestore)}
   
    
  } getData()}, [category]);

  return (
    <>
    <div className="txt-list-container">
      <h2>Buenas, buenas {prop.name}</h2>
      <p>Este es mi trabajo de {prop.trabajo}</p>
    </div>
    <div className="c-clothes">
      <ItemList item={data} />
    </div>
    </>
  );
};
export default ItemListContainer;
