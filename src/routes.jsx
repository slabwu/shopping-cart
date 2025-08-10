import App from './App'
import Homepage from './homepage'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
        ]
    }
]

export default routes