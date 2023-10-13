import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import CoffeeDetails from "../Components/CoffeeDetails/CoffeeDetails";

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
            {
                path: '/coffees/:id',
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`http://localhost:8081/coffees/${params.id}`)
            },
        ]
    }
])

export default router