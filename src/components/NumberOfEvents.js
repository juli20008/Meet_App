// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32); // Set the default value to 32

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
  };

  return (
    <div>
      <label htmlFor="numberOfEvents">Number of Events:</label>
      <input
        id="numberOfEvents"
        data-testid="number-of-events-component"
        type="number"
        min="1"
        max="100"
        value={numberOfEvents}
        onChange={handleInputChange}
      />
      <p>Showing {numberOfEvents} events</p>
    </div>
  );
};

export default NumberOfEvents;