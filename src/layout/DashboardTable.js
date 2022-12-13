import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_SPECIFIC_CONTENT } from "../redux/actionTypes/actionTypes";
import fetchBlogs from "../redux/thunk/blogs/fetchBlogs";
import removeBlog from "../redux/thunk/blogs/removeBlog";
import updateBlog from "../redux/thunk/blogs/updateBlog";

const DashboardTable = () => {
    const { blogs, specificBlog } = useSelector((state) => state);
    const dispatch = useDispatch();

    // console.log(specificBlog);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const updataFormSubmit = (e) => {
        e.preventDefault();
        const updateBlogData = {
            _id: specificBlog._id,
            name: e.target.name.value,
            title: e.target.title.value,
            description: e.target.description.value,
            tag1: e.target.tag1.value,
            tag2: e.target.tag2.value,
            tag3: e.target.tag3.value,
        };

        console.log(updateBlogData);
        dispatch(updateBlog(updateBlogData));
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Post title</th>
                        <th>Post</th>
                        <th>Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>{blog.description.slice(1, 50)}.....</td>
                            <td>{blog.name}</td>
                            {/* <td
                                onClick={() =>
                                    dispatch(fetchBlogByID(blog._id))
                                }
                            >
                                <EditBlog></EditBlog>
                            </td> */}
                            <td>
                                <label
                                    onClick={() => {
                                        dispatch({
                                            type: LOAD_SPECIFIC_CONTENT,
                                            payload: blog,
                                        });
                                    }}
                                    htmlFor="my-modal"
                                    className="btn btn-ghost"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                                    </svg>
                                </label>
                            </td>
                            <td onClick={() => dispatch(removeBlog(blog._id))}>
                                <button className="btn btn-ghost">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* modal */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <form
                            onSubmit={updataFormSubmit}
                            className="flex flex-col w-full"
                        >
                            <div className="indicator w-full">
                                <input
                                    placeholder="Your Name"
                                    className="mb-3 input input-bordered w-full"
                                    type="text"
                                    id="name"
                                    required={true}
                                    defaultValue={specificBlog.name}
                                />
                            </div>

                            <div className="indicator w-full">
                                <input
                                    placeholder="Post Title"
                                    className="mb-3 input input-bordered w-full"
                                    type="text"
                                    id="title"
                                    required={true}
                                    defaultValue={specificBlog.title}
                                />
                            </div>

                            <div className="indicator w-full">
                                <textarea
                                    placeholder="Post Description"
                                    className="mb-3 input input-bordered w-full h-40"
                                    type="text-area"
                                    id="description"
                                    required={true}
                                    defaultValue={specificBlog.description}
                                />
                            </div>

                            <div className="flex">
                                <div className="indicator w-full">
                                    <input
                                        placeholder="First Tag"
                                        className="mb-3 input input-bordered w-full"
                                        type="text"
                                        id="tag1"
                                        required={true}
                                        defaultValue={specificBlog.tag1}
                                    />
                                </div>
                                <div className="indicator px-5 w-full">
                                    <input
                                        placeholder="Second Tag"
                                        className="mb-3 input input-bordered w-full"
                                        type="text"
                                        id="tag2"
                                        required={true}
                                        defaultValue={specificBlog.tag2}
                                    />
                                </div>
                                <div className="indicator w-full">
                                    <input
                                        placeholder="Third Tag"
                                        className="mb-3 input input-bordered w-full"
                                        type="text"
                                        id="tag3"
                                        required={true}
                                        defaultValue={specificBlog.tag3}
                                    />
                                </div>
                            </div>

                            <input
                                value={"post blog"}
                                className="mb-3 btn btn-dark"
                                type="submit"
                            />
                        </form>
                    </div>
                    <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DashboardTable;
