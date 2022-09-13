import { useEffect, useState } from 'react';
import dataClothes from '../../Products/dataClothes';
import fetchData from '../../Products/fetchData';
import Item from '../Item/Item';


const ItemList = () => {

        const [data, setData] = useState([]);

        useEffect(()=>{

            fetchData(2000, dataClothes)//esto me trae el array los productos
            .then(resolve => setData(resolve))
            .catch(error=> console.log(error))
            

        },[]);

        
  return (
    <>
    {
    data.map(x => (
        <Item 
        key={x.id}
        id={x.id}
        title={x.title}
        description={x.description}
        price={x.price}
        pictureUrl={x.pictureUrl} />
    ))
    }
    </>
  );
}

export default ItemList