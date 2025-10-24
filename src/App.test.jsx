import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
import App from './App';

beforeEach(() => {
  render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
});

afterEach(() => {
  cleanup();
})

describe('App component', () => {
  it('renders correct heading', () => {
    expect(screen.getByRole('heading').textContent).toMatch(/header/i);
  });

  it('renders three links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  })

  it('renders homepage'), () => {
    expect(screen.getByText('This is the homepage.')).toBeInTheDocument();
  } 
});