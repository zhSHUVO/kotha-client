import { updatedBlog } from "../../actions/blogActions";

const updateBlog = (updatedBlogData) => {
    return async (dispatch, getState) => {
        const res = await fetch(
            `http://localhost:5000/api/v1/blog/${updatedBlogData._id}`,
            {
                method: "PATCH",
                body: JSON.stringify(updatedBlogData),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );

        const data = await res.json();

        console.log(data);

        dispatch(updatedBlog(updatedBlogData));
    };
};

export default updateBlog;
