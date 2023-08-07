import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('render the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find a table for any occasion/i);
  expect(linkElement).toBeInTheDocument();
});

test('render the form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Number of People/i);
  const linkElement2 = screen.getByText(/Seating Option/i);
  const linkElement3 = screen.getByText(/Let's Go/i);
  const linkElement4 = screen.getByText(/Occasion/i);
  expect(linkElement).toBeInTheDocument();
});

test('render success message', () => {
  render(<App />);
  // Simulate a successful form submission
  fireEvent.click(screen.getByText(/Let's Go/i));
  // Check if the success message is rendered
  const successMessage = screen.getByText(/Booking successful! We look forward to hosting you./i);
  expect(successMessage).toBeInTheDocument();
});



