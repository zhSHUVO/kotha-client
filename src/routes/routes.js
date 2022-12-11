import { createBrowserRouter } from "react-router-dom";
import BlogPostForm from "../layout/BlogPostForm";
import DashboardTable from "../layout/DashboardTable";
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
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardTable></DashboardTable>,
            },
            {
                path: "blogpostform",
                element: <BlogPostForm></BlogPostForm>,
            },
        ],
    },
]);

export default routes;
