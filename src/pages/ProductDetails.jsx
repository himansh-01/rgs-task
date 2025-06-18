
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./Home";
import useCartStore from "../store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();
   const navigate = useNavigate();
  const item = products.find((p) => p.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

    if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 min-w-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700">Product Not Found</h2>
          <p className="text-gray-500 mt-2">The product you are looking for doesn’t exist or has been removed.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
     <div className="min-h-screen min-w-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="md:max-w-4xl sm:w-[65%] w-[70%] mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="text-white text-sm mb-4"
        >
          ← Back to Products
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-center"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-800">{item.name}</h1>
            <p className="mt-2 text-green-600 text-xl font-bold">₹{item.price}</p>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Enjoy fresh and high-quality {item.name.toLowerCase()} delivered directly to your doorstep.
              Perfect for your daily needs with guaranteed freshness.
            </p>

            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition"
            onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
