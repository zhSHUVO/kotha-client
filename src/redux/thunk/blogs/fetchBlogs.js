import { loadContent } from "../../actions/blogActions";

const fetchBlogs = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/api/v1/blogs");
        const data = await res.json();

        if (data.data.length) {
            dispatch(loadContent(data.data));
        }
    };
};

export default fetchBlogs;
