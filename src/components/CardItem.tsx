import useStore from "../store";
import { Product } from "../types/Product";

interface CardItemProps {
  product: Product;
}

export default function CardItem({ product }: CardItemProps) {
  const { addToCart } = useStore();
  return (
    <div className="card-item">
      <div className="card-item__container">
        <img
          className="card-item__container__img"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="card-content">
        <div className="card-content__text">
          <h5>{product.title.slice(0, 25)}</h5>
          <h5>${product.price}</h5>
          <p>{product.category}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="card-content__btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
