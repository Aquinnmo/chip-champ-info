import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand fw-bold">
              Chip Champ
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow-1">
        <Outlet />
      </main>
      
      <footer className="bg-dark text-light py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Chip Champ - Virtual Poker Chip Management</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
