import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (prop) =>{

    const onAdd = (ItemCount) =>{
        alert (ItemCount)
    }
    
    return(
        <>
        <h2>Buenas, buenas {prop.name}</h2>
        <p>Este es mi trabajo de {prop.trabajo}</p>
        <ItemCount initial={1} stock={12} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer;