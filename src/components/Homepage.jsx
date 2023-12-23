import React, { useState } from "react";
import styles from "../styles/Homepage.module.css";
import Orderbtn from "./Orderbtn";
import Menu from "./Menu";



const Homepage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOrderButtonClick = () => {
    // Toggle the visibility of the menu
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.containerStyle}>
      <div className={styles.textStyle}>
        <p>Welcome to our cafe!</p>
      </div>
      <div className={styles.orderTitleStyle}>
        Explore our menu and place an order:
      </div>
      <div className={styles.orderDetailsStyle}>
        Menu details and description...
      </div>
      <Orderbtn handleOrderButtonClick={handleOrderButtonClick} />


    </div>

    
  );
};

export default Homepage;
