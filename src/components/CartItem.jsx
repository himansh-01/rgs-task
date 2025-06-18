
import useCartStore from "../store/cartStore";

const CartItem = ({ item }) => {
  const { removeFromCart, incrementQty, decrementQty } = useCartStore();

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Total: ₹{item.price * item.quantity}</p>
        <div className="flex items-center gap-2 mt-1">
          <button onClick={() => decrementQty(item.id)} className="px-2 bg-gray-300">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => incrementQty(item.id)} className="px-2 bg-gray-300">+</button>
          <button
            className="ml-4 text-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
