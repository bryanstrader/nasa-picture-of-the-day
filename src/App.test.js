/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders picture of day', () => {
    render(<App />);
    const linkElement = screen.getByText(/Picture of Day/i);
    expect(linkElement).toBeInTheDocument();
});
