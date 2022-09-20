//componente que muestra los productos
import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import dataClothes from "../../Products/dataClothes";
import { useParams } from "react-router-dom";
import fetchData from "../../Products/fetchData";

const ItemListContainer = (prop) => {
  const onAdd = (ItemCount) => {
    alert(ItemCount);
  };

  const [data, setData] = useState([]);

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    if (category) {
      fetchData(
        2000,
        dataClothes.filter((item) => item.category == category)
      )
        //esto me trae el array los productos
        .then((resolve) => setData(resolve))
        .catch((error) => console.log(error));
    } else {
      fetchData(2000, dataClothes)
        //esto me trae el array los productos
        .then((resolve) => setData(resolve))
        .catch((error) => console.log(error));
    }
  }, [category]);

  return (
    <>
      <h2>Buenas, buenas {prop.name}</h2>
      <p>Este es mi trabajo de {prop.trabajo}</p>
      <ItemList item={data} />
      <ItemCount initial={1} stock={12} onAdd={onAdd} />
    </>
  );
};
export default ItemListContainer;
