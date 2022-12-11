import React from "react";
import BlogPostForm from "../layout/BlogPostForm";
import DashboardTable from "../layout/DashboardTable";

const Dashboard = () => {
    return (
        <div>
            <div className="mt-48 flex flex-col items-center">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-shrink-0 w-full max-w-lg shadow-2xl">
                        <DashboardTable></DashboardTable>
                    </div>
                    <div className="divider divider-horizontal mr-10 ml-10"></div>
                    <div className=" flex-shrink-0 w-full max-w-lg shadow-2xl p-2 rounded-lg ">
                        <BlogPostForm></BlogPostForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
