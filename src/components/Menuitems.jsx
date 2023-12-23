import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import styles from "../styles/Menu.module.css";

const MenuItems = ({ item }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const cartItem = cartItems.find((prod) => prod.id === item.id);

  const handleAddToCart = (item) => {
    addToCart(item);
    // Uncomment the line below if countItems is supposed to do something
    // countItems(item.id);
  };

  return (
    <div className={styles.menuCard}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "180px", height: "160px" }}
      />
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
      {cartItem && (
        <span className="position-relative">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            {cartItem.qty}
          </span>
        </span>
      )}
    </div>
  );
};

export default MenuItems;
