import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    /* <!-- Footer --> */
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-light">Home</Link></li>
            <li><Link to="/products" className="text-light">Products</Link></li>
            <li><Link to="/cart" className="text-light">Cart</Link></li>
            <li><Link to="/register" className="text-light">Register</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact Info</h5>
          <ul className="list-unstyled">
          <li><Link to="#" className="text-light">123 Coffee St, Coffee City, CA 12345</Link></li>
          <li><Link to="#" className="text-light">Email: info@coffeehaven.com</Link></li>
          <li><Link to="#" className="text-light">Phone: (123) 456-7890</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Social Media</h5>
          <ul className="list-unstyled">
            <li><Link to="#" className="text-light">Facebook</Link></li>
            <li><Link to="#" className="text-light">Twitter</Link></li>
            <li><Link to="#" className="text-light">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
