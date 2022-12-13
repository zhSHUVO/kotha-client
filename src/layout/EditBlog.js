import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogByID from "../redux/thunk/blogs/fetchBlogByID";
import EditBlogModal from "./EditBlogModal";

const EditBlog = ({ blog }) => {
    const dispatch = useDispatch();
    const blogDetails = useSelector((state) => state.specificBlog);
    console.log(blogDetails)

    // const _id = blogDetails._id;
    // const name = blogDetails.name;
    // const title = blogDetails.title;
    // const description = blogDetails.description;
    // const tag1 = blogDetails.tag1;
    // const tag2 = blogDetails.tag2;
    // const tag3 = blogDetails.tag2;

    // const preloadedvalues = { _id, name, title, description, tag1, tag2, tag3 };
    // console.log(blog._id);

    return (
        <div>
            <label
                onClick={() => dispatch(fetchBlogByID(blog._id))}
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

            <EditBlogModal blogDetails={blogDetails}></EditBlogModal>
        </div>
    );
};

export default EditBlog;
