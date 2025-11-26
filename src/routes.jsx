import App from './App'
import Homepage from './routes/homepage.jsx'
import Shop from './routes/shop.jsx'
import Cart from './routes/cart.jsx'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ]
    }
]

export default routes