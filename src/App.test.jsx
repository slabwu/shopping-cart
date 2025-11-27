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

async function link(name) {
  return await screen.findByRole('link', {name: name})
}

async function button(name) {
  return await screen.findByRole('button', {name: name})
}

async function text(name) {
  return await screen.findByText(name)
}

describe('App component', () => {
  it('renders correct heading', () => {
    expect(screen.getByRole('heading', {name: 'Header'}).textContent).toMatch(/header/i)
  })

  it('renders three links in banner', () => {
    const banner = screen.getByRole('banner')
    expect(within(banner).getAllByRole('link')).toHaveLength(3)
  })

  it('renders homepage', async () => {
    expect(await text('This is the homepage.')).toBeInTheDocument()
  })

  it('renders change to shop page', async () => {
    const user = userEvent.setup()
    await user.click(await link('Shop'))

    expect(await text('This is the shop.')).toBeInTheDocument()
  })

  it('renders change to cart page', async () => {
    const user = userEvent.setup()
    await user.click(await link(/Cart/))

    expect(await text('This is the cart.')).toBeInTheDocument()
  })
})

describe('Homepage', () => {
  it('directs user to shop page', async () => {
    const user = userEvent.setup()
    await user.click(await link('Shop'))

    expect(await text('This is the shop.')).toBeInTheDocument()
  })
})

describe('Shop page', () => {
  it('renders 20 items', async () => {
    const user = userEvent.setup()
    await user.click(await link('Go to shop'))
    const section = await screen.findByTestId('productSection')

    expect(await within(section).findAllByRole('link')).toHaveLength(20)
  })

  it('directs user to product page', async () => {
    const user = userEvent.setup()
    await user.click(await link('Go to shop'))

    await user.click(await link(/Fjallraven/))

    expect(await text('Buy now')).toBeInTheDocument()
  })
})

describe('Product page', () => {
  async function goToProduct(user) {
    await user.click(await link('Go to shop'))
    await user.click(await link(/Fjallraven/))
  }

  it('renders product', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    expect(await text(/Your perfect pack/)).toBeInTheDocument()
  })

  it('redirects to cart when user clicks Buy now', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    await user.click(await link('Buy now'))

    expect(await text('This is the cart.')).toBeInTheDocument()
  })

  it('adds product to cart', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    await user.click(await link('Buy now'))

    expect(await text(/Fjallraven/)).toBeInTheDocument()
  })

  it('adds multiple products to cart', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    for (let i = 0; i < 4; i++) {
      await user.click(await button('+'))
    }
    await user.click(await link('Buy now'))

    expect(await link('Cart (5)')).toBeInTheDocument()
  })

  it('updates cart count', async () => {
    const user = userEvent.setup()
    await goToProduct(user)

    await user.click(await link('Buy now'))

    expect(await link('Cart (1)')).toBeInTheDocument()
  })
})

describe('Cart page', () => {
  async function addProduct(user) {
    await user.click(await link('Go to shop'))
    await user.click(await link(/Fjallraven/))
    await user.click(await link('Buy now'))
  }

  it('edits product count', async () => {
    const user = userEvent.setup()
    await addProduct(user)

    await user.click(await button('+'))

    expect(await link('Cart (2)')).toBeInTheDocument()
  })

  it('deletes product', async () => {
    const user = userEvent.setup()
    await addProduct(user)

    await user.click(await button('✕'))

    expect(await link('Cart (0)')).toBeInTheDocument()
  })
})