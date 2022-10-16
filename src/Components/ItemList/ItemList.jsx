import Item from '../Item/Item';
const ItemList = ({item}) => {

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