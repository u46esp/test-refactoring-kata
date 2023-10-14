import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders', () => {
  render(<App />);
  expect(screen.getByText('Hello Concert')).toBeInTheDocument();
})