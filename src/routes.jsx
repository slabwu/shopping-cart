import App from './App'
import Homepage from './homepage'
import Shop from './shop'
import Cart from './cart'

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