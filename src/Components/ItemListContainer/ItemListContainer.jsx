//componente que muestra los productos
import { useEffect, useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import fetchData from "../../Products/fetchData";
import dataClothes from "../../Products/dataClothes";

const ItemListContainer = (prop) =>{

    const onAdd = (ItemCount) =>{
        alert (ItemCount)
    }
    
    const [data, setData] = useState([]);

        useEffect(()=>{

            fetchData(2000, dataClothes)//esto me trae el array los productos
            .then(resolve => setData(resolve))
            .catch(error=> console.log(error))
            

        },[]);

    return(
        <>
        <h2>Buenas, buenas {prop.name}</h2>
        <p>Este es mi trabajo de {prop.trabajo}</p>
        <ItemList items={data}/>
        <ItemCount initial={1} stock={12} onAdd={onAdd}/>
        
        </>
    )
}
export default ItemListContainer;