// Import necessary modules from React and React Router
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Import various components for the application
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Logout from './components/Logout'; // Import the Logout component

// Define the main App component
const App = () => {
  // Initialize user state with data from local storage if available
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <Router>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for the homepage */}
        <Route path="/products" element={<ProductList />} /> {/* Route for the product list */}
        <Route path="/cart" element={<Cart />} /> {/* Route for the cart */}
        <Route path="/checkout" element={<Checkout />} /> {/* Route for the checkout */}
        <Route path="/login" element={<Login setUser={setUser} />} /> {/* Route for login page, passing setUser as a prop */}
        <Route path="/register" element={<Register setUser={setUser} />} /> {/* Route for registration page, passing setUser as a prop */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
        /> {/* Route for the dashboard, redirect to login if user is not authenticated */}
        <Route path="/logout" element={<Logout />} /> {/* Route for the logout */}
        <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect any unknown routes to the login page */}
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </Router>
  );
};

// Export the App component as the default export
export default App;
