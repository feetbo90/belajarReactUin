import React from 'react';
import { render } from '@testing-library/react';
import App3 from './App3';

test('renders learn react link', () => {
  const { getByText } = render(<App3 />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
