import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT } from "../actionTypes/actionTypes";

export const loadContent = (blogData) => {
    return {
        type: LOAD_CONTENT,
        payload: blogData,
    };
};

export const addContent = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog,
    };
};


export const deleteBlog = (blog) =>{
    return {
        type: DELETE_CONTENT,
        payload: blog,
    };
}