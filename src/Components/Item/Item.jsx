import { Link } from 'react-router-dom';
import './Item.css';
 
 
const Item = ({data}) =>{
    
    return(
        <div className="c-clothes">
        <div className="product">
            <div className="img-product">
                <img className='img' src={data.pictureUrl} alt="product" />
            </div>
            <div className="text-product">
                <h6>{data.title}</h6>
                <span>Precio:{data.price}</span>
                <Link to={`/item/${data.id}`}><button>Detalles</button></Link>
            </div>
        </div>
        </div>
    )
}
export default Item