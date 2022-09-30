//componente que muestra los productos
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
const ItemListContainer = () => {

  const [item, setItem] = useState({});

  const {id} = useParams()


  useEffect(()=> async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      setItem(docSnap.data())
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
  }, [id]);
    /*() => {
    fetchData(1000, dataClothes.find((producto)=> producto.id == id)) //esto me trae el objeto especifico
      .then((resolve) => setItem(resolve))
      .catch((error) => console.log(error));
  }, [id]);*/

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
