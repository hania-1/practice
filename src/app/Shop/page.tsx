'use client';

import { FaXmark } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { client as sanityClient } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Product from "../Product";
import { FaSearch } from "react-icons/fa";

type ProductType = {
  _id: string;
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
  size: string;
  rating: number;
  category: string;
  stock: number;
  discount: number;
};

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [cart, setCart] = useState<{ id: string; quantity: number; price: number; image: string; size: string; color: string }[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const itemsPerPage = 16; // Limit to 16 products per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = groq`*[_type == "product"]{
          _id,
          "name": title,
          "image": image.asset->url,
          price,
          description,
          size,
          rating,
          category,
          stock,
          discount
        }`;
        const result = await sanityClient.fetch(query);
        setProducts(result.map((item: ProductType) => ({
          id: item._id,
          image: item.image,
          name: item.name,
          price: item.price,
          description: item.description,
          size: item.size,
          rating: item.rating,
          category: item.category,
          stock: item.stock,
          discount: item.discount,
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleHeartClick = (product: ProductType) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    const updatedWishlist = isProductInWishlist
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleCartClick = (product: ProductType, size: string, color: string) => {
    const isProductInCart = cart.some((item) => item.id === product.id && item.size === size && item.color === color);
    const updatedCart = isProductInCart
      ? cart.filter((item) => item.id !== product.id || item.size !== size || item.color !== color)
      : [
          ...cart,
          {
            id: product.id,
            quantity: 1,
            price: parseFloat(product.price),
            image: product.image,
            name: product.name,
            size: size, 
            color: color, 
          },
        ];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage * itemsPerPage < filteredProducts.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const relatedProducts = selectedProduct
    ? products.filter((product) => product.category === selectedProduct.category && product.id !== selectedProduct.id)
    : [];
  return (
    <div>
      <Product />
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-96 mx-auto m-2">
        <FaSearch className="text-gray-600 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 w-full focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10 px-6">
        {currentProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          currentProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="bg-white p-3 rounded-lg shadow-md m-4 relative"
            >
              <div
                className="absolute top-2 right-2 p-1 rounded-md cursor-pointer"
                onClick={() => handleHeartClick(product)}
              >
                {wishlist.some((item) => item.id === product.id) ? (
                  <IoHeart className="w-6 h-6 text-red-500" />
                ) : (
                  <IoHeartOutline className="w-6 h-6 text-gray-600" />
                )}
              </div>

              <div
                className="absolute top-2 right-12 p-1 rounded-md cursor-pointer"
                onClick={() => handleCartClick(product, selectedSize, selectedColor)}
              >
                <FaShoppingCart
                  className={`w-6 h-6 ${cart.some((item) => item.id === product.id && item.size === selectedSize && item.color === selectedColor)
                    ? "text-red-500"
                    : "text-gray-600"
                  }`}
                />
              </div>
              <Image
                src={product.image}
                alt={`Image of ${product.name}`}
                width={120}
                height={120}
                className="object-cover rounded-md mx-auto"
              />
              <h3 className="text-lg font-semibold mt-3 text-center">{product.name}</h3>
              <p className="text-gray-600 text-center text-sm">{product.description}</p>

              <div className="mt-3 text-center">
                <p className="text-base font-semibold">Price: ${product.price}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                <p className="text-sm text-gray-500">Discount: {product.discount}%</p>
                <p className="text-sm text-yellow-500">Rating: {product.rating} ⭐</p>
              </div>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-3 w-full hover:bg-blue-600"
                onClick={() => openModal(product)}
              >
                View Details
              </button>
            </div>
          ))
        )}
      </div>
      {/* Pagination */}
      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={nextPage}
            disabled={currentPage * itemsPerPage >= filteredProducts.length}
          >
            Next Page
          </button>
        </div>
      )}
{isModalOpen && selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-xl text-gray-600"
        onClick={closeModal}
      >
        <FaXmark />
      </button>
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0 center">
          <Image
            src={selectedProduct.image}
            alt={`Image of ${selectedProduct.name}`}
            width={150}
            height={200}
            className="object-cover rounded-md"
          />
          {/* Stock, Rating, Category, Discount (below Image) */}
          <div className="mt-3">
            <p className="text-sm text-gray-500">Stock: {selectedProduct.stock}</p>
            <p className="text-sm text-yellow-500">Rating: {selectedProduct.rating} ⭐</p>
            <p className="text-sm text-gray-500">Category: {selectedProduct.category}</p>
            <p className="text-sm text-green-500">Discount: {selectedProduct.discount}%</p>
          </div>
        </div>
        {/* Product Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
          <p className="text-gray-600">{selectedProduct.description}</p>

          {/* Price */}
          <div className="mt-3">
            <p className="font-bold text-lg">Price: ${selectedProduct.price}</p>
          </div>

          {/* Size and Color Selection */}
          <div className="mt-3">
            <label className="block text-sm font-semibold text-gray-700">Size</label>
            <select
              className="mt-1 p-2 w-32 border rounded-lg"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="block text-sm font-semibold text-gray-700">Color</label>
            <select
              className="mt-1 p-2 w-32 border rounded-lg"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
            <span className="block mt-1 text-gray-600">Selected Color: {selectedColor}</span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-3 w-full hover:bg-blue-600"
            onClick={() => handleCartClick(selectedProduct, selectedSize, selectedColor)}
          >
            {cart.some(
              (item) =>
                item.id === selectedProduct.id &&
                item.size === selectedSize &&
                item.color === selectedColor
            )
              ? "Added to Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Related Products</h3>
        <div className="grid grid-cols-3 gap-4 mt-4 max-h-64 overflow-y-auto">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white p-3 rounded-lg shadow-md"
              >
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />

                <h4 className="mt-3 text-center">{relatedProduct.name}</h4>
                <p className="text-sm text-center text-gray-600">{relatedProduct.price}</p>
              </div>
            ))
          ) : (
            <p>No related products available</p>
          )}
  </div>
</div>
          </div>
        </div>
      )}
    </div>
  );
};
  
export default Shop;
