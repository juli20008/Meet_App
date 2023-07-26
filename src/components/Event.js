// src/components/Event.js

import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsToggle = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="event" data-testid="event-item">
      <li className="location">{event.location}</li>

      {showDetails && (
        <div className="details-section" data-testid="details-section"> 
          <p className="description">{event.description}</p>
        </div>
      )}

      <button
        className="show-details-button"
        onClick={handleDetailsToggle}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default Event;