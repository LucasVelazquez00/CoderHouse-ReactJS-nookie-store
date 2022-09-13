import './Item.css';


const Item = ({title, description, price, pictureUrl}) =>{
    return(
        <div className="c-clothes">
        <div className="product">
            <div className="img-product">
                <img src={pictureUrl} alt="product" />
            </div>
            <div className="text-product">
                <h6>{title}</h6>
                <p>{description}</p>
                <span>Precio:{price}</span>
                <button></button>
            </div>
        </div>
        </div>
    )
}
export default Item