import React, { useState, useContext } from "react";
import MenuItems from "./Menuitems";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // Clear selectedItem when an item is added to the cart

  const { addToCart, cartItems } = useContext(CartContext);

  // Replace this static data with your actual coffee list
  const coffeeShop = [
    {
      coffeeShop: {
        name: "Coffee Paradise",
        location: "123 Main Street, Cityville",
        menu: [
          {
            id: 1,
            name: "Espresso",
            price: 2.99,
            image:
              "https://lovefoodfeed.com/wp-content/uploads/2022/09/Espresso-with-chocolate-750-wp-300x300.webp",
          },
          {
            id: 2,
            name: "Cappuccino",
            price: 3.41,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Oy76r9aQO77XU-UtkF-ogdPhGB-X3b7yIknl1R71FZmsHdTVLgD7wV-axMNfPjjbw3Y&usqp=CAU",
          },
          {
            id: 3,
            name: "Latte",
            price: 3.99,
            image:
              "https://www.roastycoffee.com/wp-content/uploads/mBPxUtTx-720x540.jpeg",
          },
          {
            id: 4,
            name: "Mocha",
            price: 2.49,
            image:
              "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
          },
          {
            id: 5,
            name: "Americano",
            price: 2.79,
            image:
              "https://images.ctfassets.net/v601h1fyjgba/1vlXSpBbgUo9yLzh71tnOT/a1afdbe54a383d064576b5e628035f04/Iced_Americano.jpg",
          },
          {
            id: 6,
            name: "Milk Tea",
            price: 2.19,
            image:
              "https://tyberrymuch.com/wp-content/uploads/2023/06/coffee-milk-bubble-tea-recipe-735x735.jpg",
          },
          {
            id: 7,
            name: "Green Tea",
            price: 3.19,
            image:
              "https://worldlytreat.com/wp-content/uploads/2023/08/Green-Milk-Tea-5.jpg",
          },
          {
            id: 8,
            name: "Milk",
            price: 1.59,
            image:
              "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=556,505",
          },
        ],
        specials: [
          {
            id: 1,
            name: "Caramel Macchiato",
            price: 4.65,
            image:
              "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Caramel-Macchiato-Pin-3.jpg",
          },
          {
            id: 2,
            name: "Hazelnut Latte",
            price: 4.39,
            image:
              "https://skinnymixes.co.uk/cdn/shop/articles/hazelnut_latte.jpg?v=1689829717",
          },
        ],
        dailyOffer: "Buy one, get one free on all medium-sized coffees today!",
        openingHours: {
          Monday: "7:00 AM - 6:00 PM",
          Tuesday: "7:00 AM - 6:00 PM",
          Wednesday: "7:00 AM - 6:00 PM",
          Thursday: "7:00 AM - 6:00 PM",
          Friday: "7:00 AM - 6:00 PM",
          Saturday: "8:00 AM - 9:00 PM",
          Sunday: "Closed",
        },
      },
    },
  ];

  // Access the properties of the first element in the array
  const firstCoffeeShop = coffeeShop[0].coffeeShop;

  return (
    <div className={styles.menuContainerStyle}>
      <h1 style={{ color: "white" }}>{firstCoffeeShop.name} Menu</h1>

      <h2 style={{ color: "white" }}>Regular Menu</h2>
      <div className={[styles.menuContainer]}>
        {firstCoffeeShop.menu.map((item) => (
          <MenuItems key={item.id} item={item} />
        ))}
      </div>

      <h2 style={{ color: "white" }}>Specials</h2>
      <div className={[styles.menuContainer]}>
        {firstCoffeeShop.specials.map((item) => (
          <MenuItems key={item.id} item={item} />
        ))}
      </div>

      <p style={{ color: "black", fontSize: "20pt" }}>
        {firstCoffeeShop.dailyOffer}
      </p>

      <div
        style={{
          color: "black",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px",
          margin: "20px 0px 60px",
          height: "600px",
        }}
      >
        <h2
          style={{ color: "black", marginBottom: "20px", fontSize: "1.5rem" }}
        >
          Opening Hours
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h3
              style={{
                color: "black",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              Weekdays
            </h3>
            <div style={{ color: "black" }}>
              {Object.entries(firstCoffeeShop.openingHours).map(
                ([day, hours]) =>
                  day !== "Saturday" &&
                  day !== "Sunday" && (
                    <p key={day} style={{ margin: "5px 0", color: "black" }}>
                      <strong>{day}:</strong> {hours}
                    </p>
                  )
              )}
            </div>
          </div>

          <div>
            <h3
              style={{
                color: "black",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              Weekends
            </h3>
            <div style={{ color: "black" }}>
              {Object.entries(firstCoffeeShop.openingHours).map(
                ([day, hours]) =>
                  day === "Saturday" && (
                    <p
                      key={day}
                      style={{
                        margin: "5px 0",
                        color: "black",
                      }}
                    >
                      <strong>{day}:</strong> {hours}
                    </p>
                  )
              )}
              {Object.entries(firstCoffeeShop.openingHours).map(
                ([day, hours]) =>
                  day === "Sunday" && (
                    <p key={day} style={{ margin: "5px 0", color: "red" }}>
                      <strong>{day}:</strong> {hours}
                    </p>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
};

export default Menu;
