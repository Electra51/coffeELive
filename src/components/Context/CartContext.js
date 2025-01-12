import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const cartLength = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartLength }}>
      {children}
    </CartContext.Provider>
  );
};
