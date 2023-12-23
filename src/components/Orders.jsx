import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import styles from "../styles/Orders.module.css";

const Orders = () => {
  const {
    cartItems,
    removeFromCart,
    updateCartItemCount,
    calculateTotalAmount,
  } = useContext(CartContext);
  const totalAmount = calculateTotalAmount();

  return (
    <div className={`container ${styles.container}`}>
      {cartItems.length === 0 ? (
        <p className={`text-center ${styles.emptyCart}`}>
          There isn't any orders yet!
        </p>
      ) : (
        <div>
          <table
            className={`table table-striped table-bordered ${styles.table}`}
          >
            <thead className={`thead-dark ${styles.tableHeader}`}>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    {item.price
                      ? `$${item.price.toFixed(2)}`
                      : "Price not available"}
                  </td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.totalAmount}>Total: ${totalAmount}</div>
        </div>
      )}
    </div>
  );
};

export default Orders;
