import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importing necessary hooks from react-router-dom
import "./Dashboard.css"; // Custom CSS for additional styling

const Dashboard = () => {
  // Retrieve the user data passed via the state from the Register component
  const location = useLocation();
  const navigate = useNavigate();
const { user } = location.state || { user: {} }; // Default to an empty object if state is

  // Retrieve cart items from localStorage or initialize as empty array
  const [cart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Function to calculate total price based on items in cart
  const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0);
  };

  // Calculate total price of items in cart
  const totalPrice = calculateTotalPrice(cart);

  // UseEffect hook to navigate to product list if total price equals 0
 /*  useEffect(() => {
    if (totalPrice === 0) {
      navigate('/products'); // Navigate to product list page
    }
  }, [totalPrice, navigate]); */

  return (
    <div className="container align-items-center justify-content-center mt-5 pb-5 pt-5">
      <div className="row">
        <div className="col-md-8">
          {/* Dashboard card with user information and order summary */}
          <div className="card p-4 shadow">
            {/* Display user's first and last name */}
            <h1 className="mb-4">Welcome, {user.firstName} {user.lastName}</h1>
            {/* Display user's contact number */}
            <p><strong>Contact Number:</strong> {user.contactNumber}</p>
            {/* Display user's address */}
            <p><strong>Address:</strong> {user.address}</p>
            {/* Display user's email */}
            <p><strong>Email:</strong> {user.email}</p>
            {/* Section for displaying order summary */}
            <h2 className="mt-5 mb-4">Order Summary</h2>
            <div className="card">
              <div className="card-body">
                {/* Map through cart items to display each item's details */}
                {cart.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between mb-2">
                    {/* Display item name and quantity */}
                    <span>{item.name} (x{item.quantity})</span>
                    {/* Display total price for each item */}
                    <span>₱ {(item.price * item.quantity).toFixed(2)}</span>
                   
                  </div>
                ))}
                {/* Horizontal line for separation */}
                <hr />
                {/* Display total price of all items in cart */}
                <div className="d-flex justify-content-between">
                  <h3>Total:</h3>
                  <h3>₱ {totalPrice.toFixed(2)}</h3>
                </div>
              </div>
            </div>
            {/* Button to navigate to checkout page */}
            <div className="text-center mt-4">
              <Link to="/checkout" className="btn btn-primary btn-lg w-50">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
