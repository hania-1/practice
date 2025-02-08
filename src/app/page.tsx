"use client"; // Add this line to mark the component as a client component

import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Shop from "./Shop/page";
import MyAccount from "./MyAccount";
import CheckOut from "./CheckOut";
import Cart from "./Cart";
import About from "./About/Page";
import Contact from "./Contact";
import Blog from "./Blog";
import Wishlist from "./Wishlist/page";
import Product from "./Product";
import NavIcons from "./NavIcons";
import Footer from "./Footer";
type Product = {
  id: string;
  name: string;
  price: number;
  image?: string; // Optional image field
};

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home"); // Track current page
  const [likedProducts, setLikedProducts] = useState<Product[]>([]); // Use Product[] instead of any[]

  return (
    <main>
      <div>
        {/* Navbar */}
        <Navbar setCurrentPage={setCurrentPage} likedProducts={likedProducts} setLikedProducts={setLikedProducts} />


        {/* Conditional Rendering */}
        {currentPage === "home" && (
          <>
          {currentPage === "home" && (
  <div id="home">
    <Home setCurrentPage={setCurrentPage} />
  </div>
)}

            {/* Other Sections */}
            <div id="Second">
              <Second setCurrentPage={setCurrentPage} />
            </div>
            <div id="Third">
              <Third setCurrentPage={setCurrentPage} />
            </div>
            <div id="Fourth">
              <Fourth setCurrentPage={setCurrentPage} />
            </div>
            <div id="Fifth">
              <Fifth setCurrentPage={setCurrentPage} />
            </div>

            <div id="Sixth">
              <Sixth />
            </div>
            
            {/* Footer */}
            <div id="Seventh"></div>
          </>
        )}

        {/* Shop Section */}
        {currentPage === "shop" && (
          <div id="Shop">
            <Shop />
          </div>
        )}

        {/* Wishlist Section */}
        {currentPage === "Wishlist" && (
          <div id="Wishlist">
            <Wishlist />
          </div>
        )}

        {/* NavIcons Section */}
        {currentPage === "NavIcons" && (
          <div id="NavIcons">
            <NavIcons setCurrentPage={setCurrentPage} />
          </div>
        )}

        {/* MyAccount Section */}
        {currentPage === "MyAccount" && (
          <div id="MyAccount">
            <MyAccount />
          </div>
        )}

        {/* CheckOut Section */}
        {currentPage === "CheckOut" && (
          <div id="CheckOut">
            <CheckOut />
          </div>
        )}

        {/* Product Section */}
     {/* Product Section */}
{currentPage === "Product" && (
          <div id="Product">
            <Product />
          </div>
        )}


        {/* Cart Section */}
        {currentPage === "Cart" && (
          <div id="Cart">
            <Cart />
          </div>
        )}

        {/* About Section */}
        {currentPage === "About" && (
          <div id="About">
            <About />
          </div>
        )}

        {/* Contact Section */}
        {currentPage === "Contact" && (
          <div id="Contact">
            <Contact />
          </div>
        )}

        {/* Blog Section */}
        {currentPage === "Blog" && (
          <div id="Blog">
            <Blog />
          </div>
        )}
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </main>
  );
}
