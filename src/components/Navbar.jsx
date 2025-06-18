
// import { Link } from "react-router-dom";
// import useCartStore from "../store/cartStore";

// const Navbar = () => {
//   const cartItems = useCartStore((state) => state.cart);

//   return (
//     <nav className="bg-green-600 px-4 py-3 fixed top-0 w-full flex justify-between items-center z-10">
//       <h1 className="text-xl font-bold text-white"><Link to="/">🛒 GroceryStore</Link></h1>
//       <ul className="flex gap-6 text-white">
//         <li><Link to="/">Home</Link></li>
//         <li>
//           <Link to="/cart">
//             Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cart);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-green-600 fixed w-full top-0 left-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          <Link to="/">GroceryStore</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white text-base font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="relative hover:underline">
            Cart
            {cartCount > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-white text-green-700 text-xs rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
            style={{
              backgroundColor : "#3AB30A"
            }}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white px-4 pb-4">
          <Link
            to="/"
            className="block py-2 border-b border-green-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-white text-green-700 text-xs rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
