import { deleteBlog } from "../../actions/blogActions";

const removeBlog = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/api/v1/blog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.operation === "successful") {
            dispatch(deleteBlog(id));
        }
    };
};

export default removeBlog;
