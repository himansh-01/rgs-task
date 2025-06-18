import useCartStore from "../store/cartStore";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen min-w-screen max-w-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">Your cart is empty.</p>
            <Link to="/" className="mt-4 text-blue-600 hover:underline">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="mt-8 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Total: ₹{total}
              </h3>
              <Link
                to="/checkout"
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-2 w-52 sm:px-6 sm:w-auto rounded-lg transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
