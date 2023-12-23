import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import styles from "../styles/Orderbtn.module.css";

const Orderbtn = ({ handleOrderButtonClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    // Toggle the visibility of the menu
    setShowMenu(!showMenu);
    // Call the handleOrderButtonClick function passed as a prop
    handleOrderButtonClick();
  };
  return (
    <div className={styles.orderSectionStyle}>
      <div onClick={toggleMenu}>
        <Link className={styles.orderButtonStyle} to="/menu">
          Order to go Now
        </Link>
      </div>
      {showMenu && <Menu />}
    </div>
  );
};

export default Orderbtn;
