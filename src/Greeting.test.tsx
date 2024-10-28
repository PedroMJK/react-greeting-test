// src/Greeting.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders the greeting message', () => {
    render(<Greeting name="Pedro" />);
    
    const greetingElement = screen.getByText(/Hello, Pedro!/i);
    expect(greetingElement).toBeInTheDocument();
  });
});
