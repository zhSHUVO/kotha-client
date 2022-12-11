import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../redux/actions/blogActions";

const BlogPostForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (blog) => {
        const blogData = {
            name: blog.name,
            title: blog.title,
            description: blog.description,
            tags: [blog.tag1, blog.tag2, blog.tag3],
        };

        dispatch(addContent(blogData));
    };

    const state = useSelector((state) => state);
    // console.log(state);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full"
            >
                <div className="indicator w-full">
                    <input
                        placeholder="Your Name"
                        className="mb-3 input input-bordered w-full"
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.name && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="Post Title"
                        className="mb-3 input input-bordered w-full"
                        type="text"
                        {...register("title", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.title && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <textarea
                        placeholder="Post Description"
                        className="mb-3 input input-bordered w-full h-40"
                        type="text-area"
                        {...register("description", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.description && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>

                <div className="flex">
                    <div className="indicator w-full">
                        <input
                            placeholder="First Tag"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("tag1", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.tag1 && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator px-5 w-full">
                        <input
                            placeholder="Second Tag"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("tag2", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.tag2 && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <input
                            placeholder="Third Tag"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("tag3", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.tag3 && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                </div>

                <input
                    value={"post blog"}
                    className="mb-3 btn btn-dark"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default BlogPostForm;
