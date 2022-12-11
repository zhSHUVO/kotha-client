import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPost from "../layout/BlogPost";
import fetchBlogs from "../redux/thunk/blogs/fetchBlogs";

const Home = () => {
    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <div className="mt-20">
            {blogs.map((blog) => (
                <BlogPost key={blog._id} blog={blog}></BlogPost>
            ))}
        </div>
    );
};

export default Home;
