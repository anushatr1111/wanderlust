import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import './Header.css';

const Header = () => {

  const { user, logOut } = useAuth()

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5">
        <Link className="navbar-brand" to="/"><h1>Travel Insider</h1></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item">
                  <Link className="nav-link text-black" to="/add-service">Add Location</Link>
                </li>
                <li className="dropdown-item">
                  <Link className="nav-link text-black" to="/manage-service">Manage Location</Link>
                </li>
                <li className="dropdown-item">
                  <Link className="nav-link text-black" to="/manage-orders">Manage All Orders</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/my-orders">My Orders</Link>
            </li>

            {

              user.email ?
                <button className="btn btn-custom" onClick={logOut}> Sign Out ({user?.displayName})</button>
                :
                <li className="nav-item mx-3">
                  <Link className="nav-link btn btn-custom" to="/login">Login</Link>
                </li>
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;