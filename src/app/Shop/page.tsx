"use client";
import { FaXmark } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { client as sanityClient } from "../../sanity/lib/client";
import { groq } from "next-sanity";

type ProductType = {
  _id: string; // add this line
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
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [cart, setCart] = useState<
    { id: string; quantity: number; price: number; image: string }[]
  >([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

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
        setProducts(
          result.map((item: ProductType) => ({
            id: item._id, // Use _id from Sanity as unique key
            image: item.image,
            name: item.name,
            price: item.price,
            description: item.description,
            size: item.size,
            rating: item.rating,
            category: item.category,
            stock: item.stock,
            discount: item.discount,
          }))
        );
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

  const handleCartClick = (product: ProductType) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    const updatedCart = isProductInCart
      ? cart.filter((item) => item.id !== product.id)
      : [
          ...cart,
          { id: product.id, quantity: 1, price: parseFloat(product.price), image: product.image },
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

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-10 px-6">
        {products.map((product, index) => (
          <div
            key={product.id || index} // Ensure the key is unique by using id or index as fallback
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
              onClick={() => handleCartClick(product)}
            >
              <FaShoppingCart
                className={`w-6 h-6 ${
                  cart.some((item) => item.id === product.id)
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
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-3/4 max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <FaXmark className="w-5 h-5" />
            </button>
            <div className="flex items-start space-x-4">
              <div className="w-1/3">
                <Image
                  src={selectedProduct.image}
                  alt={`Image of ${selectedProduct.name}`}
                  width={200}
                  height={200}
                  className="object-cover rounded-md"
                />
                <p className="text-center text-md font-bold mt-2">
                  You can choose an item from here
                </p>
                {/* Additional images with gaps and names */}
                <div className="flex flex-col items-center mt-4 space-y-4">
                  {[
                    { src: "/img29.png", name: "Sofa" },
                    { src: "/img14.png", name: "Table" },
                    { src: "/img24.png", name: "Chair & Table" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <Image
                        src={item.src}
                        alt={`Image of ${item.name}`}
                        width={90}
                        height={90}
                        className="object-cover rounded-md border border-gray-200 hover:shadow-lg"
                      />
                      <p className="text-sm font-medium text-gray-700">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-2/3">
                <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
                <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
                <p className="text-lg font-semibold mt-2">Price: ${selectedProduct.price}</p>
                <div className="flex items-center space-x-2 mt-4">
                  <label htmlFor="size" className="text-sm font-medium">Size:</label>
                  <div className="flex space-x-2">
                    {["S", "M", "L"].map((size) => (
                      <button
                        key={size}
                        className="border rounded-full px-4 py-2 text-sm hover:bg-gray-200 focus:outline-none"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <label htmlFor="color" className="text-sm font-medium">Color:</label>
                  <div className="flex space-x-2">
                    {["lightpink", "lightblue", "purple", "gray"].map((color) => (
                      <div
                        key={color}
                        className="w-8 h-8 rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                        style={{
                          backgroundColor: color,
                          filter: `brightness(${
                            color === "gray" ? 0.7 : 1
                          })`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-6 w-full hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;

