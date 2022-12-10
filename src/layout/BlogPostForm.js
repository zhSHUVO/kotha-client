import React from "react";
import { useForm } from "react-hook-form";

const BlogPostForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
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
                        placeholder="Post"
                        className="mb-3 input input-bordered w-full h-40"
                        type="text-area"
                        {...register("post", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.post && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>

                <input
                    value={"send"}
                    className="mb-3 btn btn-dark"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default BlogPostForm;
