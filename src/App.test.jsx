import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { within } from '@testing-library/dom'
import userEvent from "@testing-library/user-event"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import routes from './routes'

beforeEach(() => {
  render(<RouterProvider router={createMemoryRouter(routes)} />)
});

afterEach(() => {
  cleanup();
})

describe('App component', () => {
  it('renders correct heading', () => {
    expect(screen.getByRole('heading', {name: 'Header'}).textContent).toMatch(/header/i)
  })

  it('renders three links in banner', () => {
    const banner = screen.getByRole('banner')
    expect(within(banner).getAllByRole('link')).toHaveLength(3)
  })

  it('renders homepage', () => {
    expect(screen.getByText('This is the homepage.')).toBeInTheDocument()
  })

  it('renders change to shop page', async () => {
    const user = userEvent.setup()
    const button = screen.getByRole('link', {name: 'Shop'})

    await user.click(button)

    expect(await screen.findByText('This is the shop.')).toBeInTheDocument()
  })

  it('renders change to cart page', async () => {
    const user = userEvent.setup()
    const button = screen.getByRole('link', {name: 'Cart'})

    await user.click(button)

    expect(await screen.findByText('This is the cart.')).toBeInTheDocument()
  })
})

describe('Homepage', () => {
  it('directs user to shop page', async () => {
    const user = userEvent.setup()
    const button = screen.getByRole('link', {name: 'Shop'})

    await user.click(button)

    expect(await screen.findByText('This is the shop.')).toBeInTheDocument()
  })
})

describe('Shop page', () => {
  async function goToShop(user) {
    const button = screen.getByRole('link', {name: 'Go to shop'})
    await user.click(button)
  }

  it('renders 20 items', async () => {
    const user = userEvent.setup()
    await goToShop(user)
    const section = await screen.findByTestId('productSection')

    expect(await within(section).findAllByRole('link')).toHaveLength(20)
  })

  it('directs user to product page', async () => {
    const user = userEvent.setup()
    await goToShop(user)

    const button = await screen.findByRole('link', {name: /Fjallraven/})
    await user.click(button)

    expect(await screen.findByText('Buy now')).toBeInTheDocument()
  })
})

describe('Product page', () => {
  async function goToProduct(user) {
    await user.click(await screen.findByRole('link', {name: 'Go to shop'}))
    await user.click(await screen.findByRole('link', {name: /Fjallraven/}))
  }

  it('renders product', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    expect(await screen.findByText(/Your perfect pack/)).toBeInTheDocument()
  })

  it('redirects to cart when user clicks Buy now', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    const button = await screen.findByRole('link', {name: 'Buy now'})
    await user.click(button)

    expect(await screen.findByText('This is the cart.')).toBeInTheDocument()
  })

  it('adds product to cart', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    const button = await screen.findByRole('link', {name: 'Buy now'})
    await user.click(button)

    expect(await screen.findByText(/Fjallraven/)).toBeInTheDocument()
  })
})