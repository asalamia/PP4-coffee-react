// Import necessary modules from React and Bootstrap CSS
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the Register component, which accepts a setUser function as a prop
const Register = ({ setUser }) => {
  // Initialize form data state with empty strings for each field
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle changes in input fields and update the formData state accordingly
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update the specific field that changed
    });
  };

  // Navigate hook to programmatically navigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match'); // Alert if passwords do not match
      return;
    }
    localStorage.setItem('user', JSON.stringify(formData)); // Store user data in local storage
    setUser(formData); // Update the user state with the form data
    navigate('/dashboard', { state: { user: formData } }); // Navigate to dashboard with form data as state
  };

  return (
    // Render the registration form with input fields and a submit button
    <div className="container d-flex align-items-center justify-content-center min-vh-100 mt-5 pb-5 pt-5">
      <div className="col-md-6">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              name="contactNumber"
              placeholder="Contact Number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </div>
          <div className="text-center mt-4">
            <Link to="/login" className="btn btn-primary w-100">Registered. . .Proceed to Log-In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the Register component as the default export
export default Register;
