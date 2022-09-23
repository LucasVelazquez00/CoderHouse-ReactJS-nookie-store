//componente que muestra los productos
import { useEffect, useState } from "react";
import fetchData from "../../Products/fetchData";
import dataClothes from "../../Products/dataClothes";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {


  const [item, setItem] = useState({});

  const {id} = useParams()

  useEffect(() => {
    fetchData(2000, dataClothes.find((producto)=> producto.id == id)) //esto me trae el objeto especifico
      .then((resolve) => setItem(resolve))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <ItemDetail
      item={item}
      />
      {/*^^^item es un atributo de props^^^*/}

    </>
  );
};
export default ItemListContainer;
