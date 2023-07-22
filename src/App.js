// src/App.js
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

import './App.css';

const App = () => {
  return (
    <div className="App">
         <CitySearch />
         <EventList />
         <NumberOfEvents id="number-of-events-component" />
    </div>
  );
}

export default App;
