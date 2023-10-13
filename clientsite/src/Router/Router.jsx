import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:8081/coffees')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
        ]
    }
])

export default router