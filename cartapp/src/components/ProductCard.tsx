import { useCart } from "../contexts/CartContext";

type ProductCardProps = {
  name: string;
  price: number;
  id?: number;
};

const ProductCard = ({ name, price, id }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        {id !== undefined && (
          <button
            className="btn btn-success"
            onClick={() => addToCart({ id, name, price })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
