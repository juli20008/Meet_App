// src/__tests__/App.test.js

import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
      AppDOM = render(<App />).container.firstChild;
    })
  
    test('renders list of events', () => {
      expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });
  
    test('render CitySearch', () => {
      expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('NumberOfEvents component is rendered correctly', () => {
      const numberOfEventsComponent = screen.getByTestId('number-of-events-component');
      expect(numberOfEventsComponent).toBeInTheDocument();
    });
  });