
const ItemDetail = (item) => {
  return (
    <div>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <img src={item.pictureUrl} alt="img"/>
    </div>
  )
}

export default ItemDetail