import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
