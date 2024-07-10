// Import React and the Link component from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Navbar component
const Navbar = () => {
  return (
    // Render a fixed-top navigation bar that expands on larger screens
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        {/* Brand name with a link to the homepage */}
        <Link className="navbar-brand" to="/">CuppaClick</Link>
        
        {/* Button for toggling the navigation menu on smaller screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Collapsible navigation menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Unordered list for navigation links, aligned to the right */}
          <ul className="navbar-nav ms-auto">
            {/* Navigation link to the homepage */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* Navigation link to the products page */}
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            {/* Navigation link to the cart page */}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            {/* Navigation link to the login page */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            {/* Navigation link to the logout page */}
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export the Navbar component as the default export
export default Navbar;
