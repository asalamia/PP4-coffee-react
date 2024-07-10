// Import necessary modules and components from React and React Router
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css"; // Custom CSS for additional styling

// Define the Cart component
const Cart = () => {
  const [cart, setCart] = useState([]); // State to hold cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to hold total price

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Ensure quantity of each item is at least 1
    const updatedCart = storedCart.map(item => ({
      ...item,
      quantity: item.quantity >= 1 ? item.quantity : 1,
    }));
    setCart(updatedCart); // Update the cart state
    const total = calculateTotalPrice(updatedCart); // Calculate the total price
    setTotalPrice(total); // Update the total price state
  }, []);

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = (items) => {
    return items.reduce(
      (acc, item) => acc + (item.price * item.quantity || 0),
      0
    );
  };

  // Handle quantity change of an item
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) { // Ensure quantity is at least 1
      const updatedCart = [...cart]; // Create a copy of the cart
      updatedCart[index].quantity = newQuantity; // Update the quantity of the item
      setCart(updatedCart); // Update the cart state
      const total = calculateTotalPrice(updatedCart); // Calculate the total price
      setTotalPrice(total); // Update the total price state
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update the cart in localStorage
    }
  };

  // Remove an item from the cart
  const handleRemoveItem = (index) => {
    const updatedCart = [...cart]; // Create a copy of the cart
    updatedCart.splice(index, 1); // Remove the item at the specified index
    setCart(updatedCart); // Update the cart state
    const total = calculateTotalPrice(updatedCart); // Calculate the total price
    setTotalPrice(total); // Update the total price state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update the cart in localStorage
  };

  // Render the cart items and total price
  return (
    <div className="container my-5">
      <h1 className="text-center pt-4 mb-4">Your Cart</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.image_url}
                  className="img-thumbnail"
                  alt={item.name}
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>{item.name}</td>
              <td>₱{item.price}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value))
                  }
                  min="1"
                />
              </td>
              <td>₱ {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-center mt-4">Total: ₱{totalPrice.toFixed(2)}</h2>
      <div className="text-center mt-4">
        <Link to="/login" className="btn btn-secondary mx-2">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart; // Export the Cart component as the default export
