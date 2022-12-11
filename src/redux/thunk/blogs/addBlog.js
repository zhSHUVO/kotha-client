import { addContent } from "../../actions/blogActions";

const addBlog = (blogFormData) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/api/v1/blogs", {
            method: "POST",
            body: JSON.stringify(blogFormData),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.operation === "successful") {
            dispatch(addContent(blogFormData));
        }
    };
};

export default addBlog;
