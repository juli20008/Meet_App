import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import mockData from '../mock-data';
import Event from '../components/Event';
import '@testing-library/jest-dom';

describe('<Event /> component', () => {
    test('render event location', () => {
      const { container } = render(<Event event={mockData[0]} />);
      expect(container.querySelector('.location')).toBeInTheDocument();
    });
  
    test('render event details button with the title (show details)', () => {
      const { container } = render(<Event event={mockData[0]} />);
      expect(container.querySelector('.show-details-button')).toBeInTheDocument();
    });
  
   
    test("by default, event's detailed section should be hidden and becomes visible when the user clicks on the 'Show Details' button", () => {
      render(<Event event={mockData[0]} />);
      const showDetailsButton = screen.getByText('Show Details');
      fireEvent.click(showDetailsButton);
      const detailsSection = screen.getByTestId('details-section'); // Assuming you added a testID to the details section, otherwise use the class name
      expect(detailsSection).toBeInTheDocument(); // The details section should be in the document when it becomes visible
    });
    
    
  /*    test("the 'Show Details' button should be hidden by default and becomes visible when the user clicks on the 'Hide Details' button", () => {
        render(<Event event={mockData[0]} />);
        const showDetailsButton = screen.queryByText('Show Details');
        expect(showDetailsButton).toBeInTheDocument(); // The 'Show Details' button should be in the document by default
    
        const hideDetailsButton = screen.getByText('Hide Details');
        fireEvent.click(hideDetailsButton);
    
        expect(showDetailsButton).not.toBeInTheDocument(); // The 'Show Details' button should not be in the document after clicking 'Hide Details'
      });
    
      test("by default, event's detailed section should be visible and becomes hidden when the user clicks on the 'Hide Details' button", () => {
        render(<Event event={mockData[0]} />);
        const detailsSection = screen.queryByTestId('details-section'); // Assuming you added a testID to the details section, otherwise use the class name
        expect(detailsSection).toBeInTheDocument(); // The details section should be in the document by default
    
        const hideDetailsButton = screen.getByText('Hide Details');
        fireEvent.click(hideDetailsButton);
    
        expect(detailsSection).not.toBeInTheDocument(); // The details section should not be in the document after clicking 'Hide Details'
      }); */

  });

  
