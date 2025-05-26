import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold text-primary mb-4">About Chip Champ</h1>
          
          <div className="card mb-4">
            <div className="card-body">
              <p className="lead">
                This project aims to provide a virtual alternative to physical poker chips 
                for in-person Texas Hold Em games. Users will be able to join a game lobby 
                on each of their devices separately, and the service will handle all of 
                their chips, side pots, and winnings virtually.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-header bg-primary text-white">
                  <h3 className="card-title mb-0">How It Works</h3>
                </div>
                <div className="card-body">
                  <p>
                    The card game is still performed in person, but users use their device 
                    as a chip management system. This makes poker more accessible to all players.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-header bg-info text-white">
                  <h3 className="card-title mb-0">Technology</h3>
                </div>
                <div className="card-body">
                  <p>
                    Built using Vite, React + TypeScript, reimagined from a Django project 
                    that worked but became difficult to maintain and deploy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Important Notice</h4>
            <p className="mb-0">
              This service will handle <strong>NO ACTUAL TRANSFERS OF MONEY!!!</strong> 
              It aims to show each user how much they owe the pot/have won by the time 
              they decide to leave the game.
            </p>
          </div>

          <div className="card">
            <div className="card-header bg-success text-white">
              <h3 className="card-title mb-0">Credits</h3>
            </div>
            <div className="card-body text-center">
              <p className="mb-0">
                Created by <a href="https://adam-montgomery.ca" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                  Adam Montgomery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
