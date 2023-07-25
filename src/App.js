// src/App.js
import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
         <CitySearch />
         <EventList events={events} />
         <NumberOfEvents id="number-of-events-component" />
    </div>
  );
}

export default App;
