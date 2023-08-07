// src/App.js
import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import CityEventsChart from './components/CityEventsChart';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");


  useEffect(() => {
    let warningText
    if (navigator.onLine) {
      warningText = "";
    } else {
      warningText = "App is now offline.";
    }
    setWarningAlert(warningText);
    fetchData();
  }, [currentCity, currentNOE]); // Add currentNOE as a dependency

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities"
      ? allEvents
      : allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setCurrentNOE(value);
    fetchData();
  };

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} 
                  setCurrentCity={setCurrentCity} 
                  setInfoAlert={setInfoAlert}
                  setWarningAlert={setWarningAlert}/>
      <NumberOfEvents
        id="number-of-events-component"
        numberOfEvents={currentNOE}
        onInputChange={handleInputChange}// Pass the callback function to the NumberOfEvents component
        setErrorAlert={setErrorAlert}
        setWarningAlert={setWarningAlert}
      />
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventList events={events} numberOfEvents={currentNOE} />
    </div>
  );
}

export default App;

