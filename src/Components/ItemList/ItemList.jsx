
import Item from '../Item/Item';


const ItemList = ({item}) => {

console.log(item)
  return (
    <>
    {
    item.map(x => (
        <Item 
          key={x.id}
          data={x}
        />
      ))
    }
    </>
  );
}

export default ItemList