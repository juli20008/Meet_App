// src/components/EventList.js
import React, { useEffect,useState } from 'react';
import Event from "./Event";

const EventList = ({ events, numberOfEvents }) => {

  const [eventsToShow, setEventsToShow] = useState([]);

  // Update the events to show whenever the numberOfEvents prop changes
  useEffect(() => {
    if (!events || !Array.isArray(events)) {
      setEventsToShow([]);
    } else {
      const eventsToShow = events.slice(0, numberOfEvents);
      setEventsToShow(eventsToShow);
    }
  }, [events, numberOfEvents]);
  
  return (
    <ul id="event-list" data-testid="event-list" role="list">
      {eventsToShow.map(event => <Event key={event.id} event={event} />)}
    </ul>
  );
}

export default EventList;