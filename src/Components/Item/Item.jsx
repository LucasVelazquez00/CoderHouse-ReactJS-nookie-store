import './Item.css';


const Item = ({title, price, pictureUrl}) =>{
    return(
        <div className="c-clothes">
        <div className="product">
            <div className="img-product">
                <img src={pictureUrl} alt="product" />
            </div>
            <div className="text-product">
                <h6>{title}</h6>
                <span>Precio:{price}</span>
                <button>Detalles</button>
            </div>
        </div>
        </div>
    )
}
export default Item