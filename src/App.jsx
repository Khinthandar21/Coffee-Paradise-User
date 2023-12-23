import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Orderbtn from "./components/Orderbtn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col">
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
              <Route path="/menu" element={<Orderbtn />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
