import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all data from local storage
    localStorage.clear();

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card p-4 shadow">
            <h2 className="mb-4">Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
