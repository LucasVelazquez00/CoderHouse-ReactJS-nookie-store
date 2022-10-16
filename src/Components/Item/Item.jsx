import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ data }) => {
  return (

      <div className="product">
        <div className="img-product">
          <img
            className="img"
            src={data.pictureUrl}
            alt="product"
            width="1000"
          />
        </div>
        <div className="text-product">
          <h6>{data.title}</h6>
          <span>Precio: {data.price}$</span>
          <Link to={`/item/${data.id}`}>
            <button className="btn-detail">Detalles</button>
          </Link>
        </div>
      </div>
  );
};
export default Item;
