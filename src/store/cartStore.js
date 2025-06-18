
import { create } from "zustand";

const getCartFromStorage = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const useCartStore = create((set) => ({
  cart: getCartFromStorage(),
  addToCart: (product) => set((state) => {
    const existing = state.cart.find(item => item.id === product.id);
    const updatedCart = existing
      ? state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...state.cart, { ...product, quantity: 1 }];
    saveCartToStorage(updatedCart);
    return { cart: updatedCart };
  }),
  removeFromCart: (id) => set((state) => {
    const updatedCart = state.cart.filter(item => item.id !== id);
    saveCartToStorage(updatedCart);
    return { cart: updatedCart };
  }),
  incrementQty: (id) => set((state) => {
    const updatedCart = state.cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    saveCartToStorage(updatedCart);
    return { cart: updatedCart };
  }),
  decrementQty: (id) => set((state) => {
    const updatedCart = state.cart
      .map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item);
    saveCartToStorage(updatedCart);
    return { cart: updatedCart };
  })
}));

export default useCartStore;
