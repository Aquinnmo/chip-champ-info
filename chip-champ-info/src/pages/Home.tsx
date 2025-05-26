import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="hero-section text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Welcome to Chip Champ</h1>
          <p className="lead">The virtual alternative to physical poker chips for in-person Texas Hold Em games.</p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Virtual Chip Management</h5>
                <p className="card-text">Join game lobbies on your device and let us handle all your chips, side pots, and winnings virtually while you play in person.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Live In-Person Games</h5>
                <p className="card-text">We use technologies to keep your stack updated in real-time. Experience seamless gameplay that blends the in-person with the virtual.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Accessible Poker</h5>
                <p className="card-text">Making poker more accessible to everyone by eliminating the need for physical chips and complex pot calculations.</p>
              </div>
            </div>
          </div>
        </div>        <div className="alert alert-info mt-4" role="alert">
          <h4 className="alert-heading">Project Timeline</h4>
          <p>This project is currently in development. We hope to get it up and running ASAP!</p>
          <hr />
          <h5>May 26, 2025</h5>
          <p className="mb-0">Locally developed the info page for Chip Champ.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
