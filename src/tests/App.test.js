import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

import '@testing-library/jest-dom';

test('renders correctly', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
