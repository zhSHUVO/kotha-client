import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Back to Home
                </Link>
            </div>
            <div className="my-10 flex justify-center">
                <div className="tabs">
                    <li className="tab">
                        <Link to="/dashboard">Blog Post List</Link>
                    </li>
                    <li className="tab">
                        <Link to="blogpostform">Blog Post Form</Link>
                    </li>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
