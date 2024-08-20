import { render, screen } from '@testing-library/react';
import App from './App';

test('renders password generator header', () => {
  render(<App />);
  const headerEl = screen.getByText(/Password Generator/i);
  expect(headerEl).toBeInTheDocument();
});
