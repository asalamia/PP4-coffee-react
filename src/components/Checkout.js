import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'; // Custom CSS for additional styling

const Checkout = ({ user }) => {
  // State variables for capturing form input and validation errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: ''
  });

  // State variable for cart items fetched from local storage
  const [cart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  console.log('Cart display', cart)

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0);
  };

  const totalPrice = calculateTotalPrice(cart);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let errors = {};
    let isValid = true;

    // Check if first name is provided
    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    // Check if last name is provided
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    // Check if contact number is provided
    if (!contactNumber.trim()) {
      errors.contactNumber = 'Contact number is required';
      isValid = false;
    }

    // Check if delivery address is provided
    if (!address.trim()) {
      errors.address = 'Delivery address is required';
      isValid = false;
    }

    // Set formErrors state to display validation errors
    setFormErrors(errors);

    // If form is valid, proceed to checkout
    if (isValid) {
      // Clear cart items from local storage after placing order
      localStorage.removeItem('cart');

      // Alert and redirect after successful order placement
      alert('Order placed successfully!');
    } else {
      // Alert user to complete all required fields before placing order
      alert('Complete all required fields before placing order.');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center pt-4 mb-4">Checkout</h1>
      <div className="row">
        {/* Form section for customer information */}
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-lg">
            <h2 className="mb-4">Customer Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className={`form-control ${formErrors.firstName && 'is-invalid'}`}
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
                {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${formErrors.lastName && 'is-invalid'}`}
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
                {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input
                  type="tel"
                  className={`form-control ${formErrors.contactNumber && 'is-invalid'}`}
                  id="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter your contact number"
                  required
                />
                {formErrors.contactNumber && <div className="invalid-feedback">{formErrors.contactNumber}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="address" className="form-label">Delivery Address</label>
                <textarea
                  className={`form-control ${formErrors.address && 'is-invalid'}`}
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  rows="3"
                  required
                ></textarea>
                {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-primary mx-2" type="submit">
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Order summary section */}
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h2 className="mb-4">Order Summary</h2>
            {/* Display each item in the cart */}
            {cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>₱ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            {/* Display total price of all items in the cart */}
            <h3 className="text-end">Total: ₱ {totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
