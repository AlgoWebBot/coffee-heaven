import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import CoffeeDetails from "../Components/CoffeeDetails/CoffeeDetails";
import EditCoffee from "../Components/EditCoffe/EditCoffee";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Error from "../Components/Error/Error";
import Private from "../Private/Private";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:8081/coffees')
            },
            {
                path: '/addCoffee',
                element: <Private><AddCoffee /></Private>
            },
            {
                path: '/coffees/:id',
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`http://localhost:8081/coffees/${params.id}`)
            },
            {
                path: '/edit/:id',
                element: <EditCoffee />,
                loader: ({ params }) => fetch(`http://localhost:8081/coffees/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router