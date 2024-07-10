// Import necessary modules and components from React and related libraries
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'; // Import axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './ProductList.css'; // Custom CSS for additional styling

// Define the ProductList component
const ProductList = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from a mock API endpoint using axios
        const response = await axios.get('https://fake-coffee-api.vercel.app/api');
        setProducts(response.data); // Set the fetched products into state
      } catch (error) {
        console.error('Error fetching products', error); // Log an error if fetching fails
      }
    };
    fetchProducts(); // Call the fetchProducts function
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="container my-5">
      <h1 className="text-center pt-4 mb-4">Product List</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image_url} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ₱ {product.price || 'n/a'}</p>
                {/* Button to add the product to cart */}
                <button className="btn btn-primary w-100" onClick={() => {
                  const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage or initialize as empty array
                  const updatedCart = [...cart, product]; // Add current product to cart
                  localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
                }}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/cart" className="btn btn-secondary mx-2">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default ProductList; // Export the ProductList component as the default export
