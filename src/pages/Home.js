import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogPost from "../layout/BlogPost";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogposts.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div className="mt-20">
            {blogs.map((blog) => (
                <BlogPost key={blog._id.$oid} blog={blog}></BlogPost>
            ))}
        </div>
    );
};

export default Home;
