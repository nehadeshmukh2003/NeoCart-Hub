import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item 
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const changeQty = (id, val) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + val } : item
    ).filter(item => item.qty > 0));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};