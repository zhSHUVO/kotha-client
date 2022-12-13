import React from "react";

const BlogPost = ({ blog }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="m-8 p-5 w-9/12 rounded-lg bg-base-200">
                <div className="hero-content justify-end flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">{blog.title}</h1>
                        <small>by "{blog.name}"</small>
                        <p className="py-6">{blog.description}</p>
                        <div className="flex flex-row">
                            <p>Tags: </p>
                            <div>
                                <span className="badge ml-2 mr-2">{blog.tag1}</span>
                                <span className="badge ml-2 mr-2">{blog.tag2}</span>
                                <span className="badge ml-2 mr-2">{blog.tag3}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
