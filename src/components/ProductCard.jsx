
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 w-full max-w-[260px] flex flex-col items-center justify-between">
  <div className="w-full h-40 overflow-hidden rounded-md bg-gray-50">
    <img
      src= {product.image}
      alt= {product.name}
      className="object-center w-full h-full rounded-md"
    />
  </div>

  <div className="mt-3 w-full text-center">
    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
    <p className="text-green-600 font-bold mt-1">{product.price}</p>
  </div>

  <div className="mt-4 flex items-center justify-between w-full px-2">
    <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md transition"
    onClick={() => addToCart(product)}>
      Add to Cart
    </button>
    <Link
      to={`/product/${product.id}`}
      className="text-blue-600 text-sm hover:underline"
    >
      Details
    </Link>
  </div>
</div> 
 );
};

export default ProductCard;
