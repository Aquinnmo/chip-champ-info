import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src="/cc_logo.png" alt="Chip Champ Logo" className="me-2" style={{maxWidth: '40px', height: 'auto'}} />
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
                  <Link to="/" className="nav-link">🏠 Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">ℹ️ About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="container my-5">
        <Outlet />
      </main>
      
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <p>&copy; 2025 Chip Champ - Virtual Poker Chip Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
