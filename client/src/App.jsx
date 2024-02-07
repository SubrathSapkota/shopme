import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import menBanner from './Assets/banner_mens.png'
import womenBanner from './Assets/banner_women.png'
import kidBanner from './Assets/banner_kids.png'
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { fetchData } from "./context/ShopContext";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={menBanner} category="men"/>} />
          <Route path="/womens" element={<ShopCategory banner={womenBanner} category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={kidBanner} category="kid"/>} />
          <Route path="product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
