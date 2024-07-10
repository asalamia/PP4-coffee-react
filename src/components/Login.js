import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate from react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling

const Login = ({ setUser }) => {
  // State to manage form data and errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  // Navigate hook to programmatically navigate
  const navigate = useNavigate();

  // Handle changes in input fields and update the formData state accordingly
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the related form error when user starts typing again
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let errors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        setUser(storedUser); // Set the user state if credentials match
        navigate('/dashboard', { state: { user: storedUser } }); // Navigate to dashboard with user data as state
      } else {
        alert('Invalid credentials'); // Show alert if credentials do not match
      }
    }
  };

  return (
    <div id="login" className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-4">
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${formErrors.email && 'is-invalid'}`}
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${formErrors.password && 'is-invalid'}`}
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary w-100">
              Log-In
            </button>
          </div>
          <div className="text-center mt-4">
            <Link to="/register" className="btn btn-primary w-100">
              No existing account? Register Now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
