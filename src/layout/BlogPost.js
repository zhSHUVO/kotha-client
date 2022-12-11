import React from "react";

const BlogPost = ({ blog }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="m-8 p-5 w-9/12 rounded-lg bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">{blog.title}</h1>
                        <small>by "{blog.name}"</small>
                        <p className="py-6">{blog.post}</p>
                        <div className="flex flex-row">
                            <p>Tags: </p>
                            <div>
                                {blog.tags.map((tag) => {
                                    return (
                                        <span
                                            key={tag}
                                            className="badge ml-2 mr-2"
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
