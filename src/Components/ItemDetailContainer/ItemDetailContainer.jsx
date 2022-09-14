//componente que muestra los productos
import { useEffect, useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import fetchData from "../../Products/fetchData";
import dataClothes from "../../Products/dataClothes";
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemListContainer = () =>{

    const onAdd = (ItemCount) =>{
        alert (ItemCount)
    }
    
    const [data, setData] = useState({});

        useEffect(()=>{

            fetchData(2000, dataClothes)//esto me trae el objeto especifico
            .then(resolve => setData(resolve[0]))
            .catch(error=> console.log(error))
            console.log(data)

        },[data]);

    return(
        <>

        <ItemDetail item={data}/>
         {/*^^^item es un atributo de props^^^*/}

        <ItemCount initial={1} stock={12} onAdd={onAdd}/>
        
        </>
    )
}
export default ItemListContainer;