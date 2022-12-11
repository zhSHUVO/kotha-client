import {
    ADD_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
} from "../actionTypes/actionTypes";

export const loadContent = (blogData) => {
    return {
        type: GET_CONTENT,
        payload: blogData,
    };
};

export const addContent = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog,
    };
};

export const deleteBlog = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id,
    };
};
