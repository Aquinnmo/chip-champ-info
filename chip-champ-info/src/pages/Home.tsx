import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Welcome to Chip Champ</h1>
            <p className="lead">
              The virtual alternative to physical poker chips for in-person Texas Hold Em games.
            </p>
          </div>
          
          <div className="card shadow-lg mb-4">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Features</h2>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Virtual chip management for in-person games
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Side pot handling
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Real-time winnings tracking
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Accessible poker for everyone
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-warning text-center" role="alert">
            <strong>Important Note:</strong> This service handles NO actual money transfers!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
