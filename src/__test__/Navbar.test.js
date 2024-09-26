// src/__test__/Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Navbar from '../Components/Navbar'; // Adjust the import if needed

test('renders Navbar with menu toggle', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  
  // Check if the menu is hidden initially
  const menuItems = screen.queryByText(/Home/i); // Assuming "Home" is part of the menu items
  expect(menuItems).toBeNull(); // Ensure menu items are not visible initially

  // Find the menu toggle icon
  const menuIcon = screen.getByRole('button', { name: /Toggle menu/i }); // Adjust the role and name if necessary

  // Simulate click to toggle the menu
  fireEvent.click(menuIcon);

  // Check if the menu is visible after clicking the toggle
  const menuItemsAfterClick = screen.getByText(/Home/i);
  expect(menuItemsAfterClick).toBeInTheDocument();
});
