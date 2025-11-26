import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import routes from './routes';

beforeEach(() => {
  let router = createMemoryRouter(routes, { initialEntries: ['/'] })
  render(<RouterProvider router={router} />);
});

afterEach(() => {
  cleanup();
})

describe('App component', () => {
  it('renders correct heading', () => {
    expect(screen.getByRole('heading',  {name: 'Header'}).textContent).toMatch(/header/i);
  });

  it('renders three links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  })

  it('renders homepage', () => {
    expect(screen.getByText('This is the homepage.')).toBeInTheDocument();
  })

  it('renders change to shop page', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('link', {name: 'Shop'});

    await user.click(button);

    expect(screen.getByText('This is the shop.')).toBeInTheDocument();
  })

  it('renders change to cart page', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('link', {name: 'Cart'});

    await user.click(button);

    expect(screen.getByText('This is the cart.')).toBeInTheDocument();
  })
});