import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Management Application header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Task Management Application/i);
  expect(headerElement).toBeInTheDocument();
});
