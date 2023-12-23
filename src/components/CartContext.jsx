// CartProvider.js
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, qty: prevItem.qty + 1 }
            : prevItem
        );
      } else {
        return [...prevItems, { ...item, qty: 1 }];
      }
    });
  };

  // const countItems = (id) => {
  //   const item = cartItems.find((item) => item.id === id);
  //   if (!item) {
  //     setCartItems([...cartItems, { id, count: 1 }]);
  //   } else {
  //     const updatedCart = cartItems.map((eachItem) => {
  //       if (eachItem.id === id) {
  //         return {
  //           ...eachItem,
  //           count: eachItem.count + 1,
  //         };
  //       }
  //       return eachItem;
  //     });
  //     setCartItems(updatedCart);
  //   }
  // };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((prevItem) =>
          prevItem.id === itemId
            ? prevItem.qty === 1
              ? null
              : { ...prevItem, qty: prevItem.qty - 1 }
            : prevItem
        )
        .filter(Boolean)
    );
  };

  const updateCartItemCount = (newCount, itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === itemId ? { ...prevItem, qty: newCount } : prevItem
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalAmount = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        // countItems,
        removeFromCart,
        updateCartItemCount,
        clearCart,
        calculateTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
