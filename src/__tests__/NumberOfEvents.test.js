import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import user from '@testing-library/user-event'; // Fix the import statement


describe('<NumberOfEvents /> component', () => {
    test('should contain an input element with type "number"', () => {
      const { container } = render(<NumberOfEvents />);
      const inputElement = container.querySelector('input[type="number"]');
      expect(inputElement).toBeInTheDocument();
    });
    test('should have a default value of 32 for the input field', () => {
        const { container } = render(<NumberOfEvents />);
        const inputElement = container.querySelector('input[type="number"]');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe('32');
      });
      test('textbox value changes when user interacts with it', async () => { // Add the async keyword
        render(<NumberOfEvents />);
        const textboxElement = screen.getByTestId('number-of-events-component');
        expect(textboxElement.value).toBe('32'); // Check the initial value
      
        await user.type(textboxElement, '{backspace}{backspace}10');
      
        expect(textboxElement.value).toBe('10'); // Check that the value is updated to '10'
      });
  });