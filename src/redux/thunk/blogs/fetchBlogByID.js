import { loadSpecificContent } from "../../actions/blogActions";

const fetchBlogByID = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/api/v1/blog/${id}`);
        const data = await res.json();

        dispatch(loadSpecificContent(data.data));
    };
};

export default fetchBlogByID;
