import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Home from "../pages/Home";
import Root from "./Root";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/history",
                element: <History></History>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },
]);

export default routes;
