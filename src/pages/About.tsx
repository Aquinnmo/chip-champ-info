import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h1 className="display-4 fw-bold text-primary mb-4">About Chip Champ</h1>
        
        <div className="card">
          <div className="card-body">
            <h4>What We Do</h4>
            <p>Project Noble provides a virtual alternative to physical poker chips for in-person Texas Hold Em games. Our service allows all players to join a game lobby on their individual devices, while we handle all chip management, side pots, and winnings calculations virtually.</p>

            <div className="alert alert-warning mt-4" role="alert">
              <strong>Important:</strong> Our service handles NO actual transfers of money! That is handled outside of our service, to keep everyone's money as secure as possible.
            </div>

            <div className="mt-4">
              <h4>Our Mission</h4>
              <p>We aim to make poker more accessible to all by removing barriers like complex chip calculations and the need for physical poker chips. This way, you can play poker anytime and anywhere without having to plan days in advance.</p>
            </div>

            <div className="mt-4">
              <h4>How It Works</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">🛜 Players join a shared game lobby on their devices</li>
                <li className="list-group-item">📱 Each device acts as a personal chip management system</li>
                <li className="list-group-item">🃏 Card game is still performed in person</li>
                <li className="list-group-item">🪙 Virtual chip management eliminates the need for physical chips</li>
                <li className="list-group-item">🧮 Automatic side pot and winnings calculations</li>
                <li className="list-group-item">💵 At the end of the game/when you leave - you are shown what you owe/won</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4>About the Development Team</h4>
              <p>This project was developed solely by Adam Montgomery. He is a driven developer that has always enjoyed games of Texas Hold 'Em with his friends, but always found himself in situations where he had no chips to play with.
                That's why he created this site, to help people just like him. Check out his <a href="https://adam-montgomery.ca" rel="noopener noreferrer" target="_blank">personal website</a>, <a href="https://linkedin.com/in/adam-montgomery-ca" rel="noopener noreferrer" target="_blank">LinkedIn</a>, or <a href="https://adam-montgomery.ca/projects" rel="noopener noreferrer" target="_blank">other projects</a>!
              </p>
            </div>
            
            <div className="mt-3">
              <Link to="/" className="btn btn-primary me-2">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
