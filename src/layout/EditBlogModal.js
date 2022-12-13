import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import updateBlog from "../redux/thunk/blogs/updateBlog";

const EditBlogModal = ({ blogDetails }) => {
    const dispatch = useDispatch();

    // console.log(blogDetails)

    const _id = blogDetails._id;
    const name = blogDetails.name;
    const title = blogDetails.title;
    const description = blogDetails.description;
    const tag1 = blogDetails.tag1;
    const tag2 = blogDetails.tag2;
    const tag3 = blogDetails.tag2;

    const preloadedvalues = { _id, name, title, description, tag1, tag2, tag3 };
    // console.log(blogDetails.name);

    const { register, handleSubmit } =
        useForm();
        //     {
        //     defaultValues: preloadedvalues,
        // }

    const onSubmit = (data) => {
        const blogData = {
            _id: preloadedvalues._id,
            name: data.name,
            title: data.title,
            description: data.description,
            tag1: data.tag1,
            tag2: data.tag2,
            tag3: data.tag3,
        };

        console.log(blogData);

        dispatch(updateBlog(blogData));
    };
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
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

export default EditBlogModal;
