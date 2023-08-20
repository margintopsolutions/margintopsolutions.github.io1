import React from 'react';
import '../css/freelancing.css'; // Import your custom CSS for styling

function Freelancing() {
  return (
    <div className="freelancing-container">
      <h2>Explore our Freelance Profiles</h2>
      <div className="freelancing-links">
        <a href="https://www.upwork.com/freelancers/~0198b9ce30db376b5a" target="_blank" rel="noopener noreferrer">
          <div className="freelancing-card upwork">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png" alt="Upwork" />
            <h3>Upwork</h3>
            <p>Your project, my expertise.</p>
          </div>
        </a>
        <a href="https://www.fiverr.com/margintopsoln" target="_blank" rel="noopener noreferrer">
          <div className="freelancing-card fiverr">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1280px-Fiverr_Logo_09.2020.svg.png" alt="Fiverr" />
            <h3>Fiverr</h3>
            <p>Quality services, on demand.</p>
          </div>
        </a>
        <a href="https://www.truelancer.com/freelancer/margintopsolutions" target="_blank" rel="noopener noreferrer">
          <div className="freelancing-card truelancer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Truelancerlogo.png" alt="Truelancer" />
            <h3>Truelancer</h3>
            <p>Bringing your ideas to life.</p>
          </div>
        </a>
        <a href="https://www.freelancer.com/u/margintopsolutions" target="_blank" rel="noopener noreferrer">
          <div className="freelancing-card freelancer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/FL_LOGO-REDUCTION.png" alt="Freelancer" />
            <h3>Freelancer</h3>
            <p>Your vision, my creation.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Freelancing;
