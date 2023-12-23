// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import styles from "../styles/Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateCartItemCount,
    calculateTotalAmount,
  } = useContext(CartContext);

  const totalAmount = calculateTotalAmount();
  const navigate = useNavigate();

  return (
    <div className={`container-fluid ${styles.cartContainer}`}>
      <h2 className={`text-center text-white ${styles.cartHeader}`}>
        Shopping List
      </h2>
      <h3 className={styles.totalAmount}>Total: ${totalAmount}</h3>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.checkoutButton}
          onClick={() => navigate("/login")}
        >
          Checkout
        </button>
        <button
          className={styles.continueButton}
          onClick={() => navigate("/menu")}
        >
          Continue Shopping
        </button>
      </div>
      <div className={`row ${styles.divplacing}`}>
        {cartItems.length === 0 ? (
          <p className={`col-12 ${styles.emptyCart}`}>No items in the cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={`col-md-4 mb-4 `}>
              <div className={`card ${styles.cartItemCard}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={`card-img-top ${styles.cartItemImage}`}
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.cartItemName}`}>
                    {item.name}
                  </h5>
                  <p className={`card-text ${styles.cartItemPrice}`}>
                    {item.price
                      ? `$${item.price.toFixed(2)}`
                      : "Price not available"}
                  </p>
                  <div className="input-group mb-3">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      value={item.qty}
                      readOnly
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => updateCartItemCount(item.qty + 1, item.id)} // Increase quantity
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Cart;
