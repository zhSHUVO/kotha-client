import {
    ADD_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
    LOAD_SPECIFIC_CONTENT,
    UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

export const loadContent = (blogData) => {
    return {
        type: GET_CONTENT,
        payload: blogData,
    };
};

export const loadSpecificContent = (data) => {
    return {
        type: LOAD_SPECIFIC_CONTENT,
        payload: data,
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

export const updatedBlog = (updatedBlog) => {
    return {
        type: UPDATE_CONTENT,
        payload: updatedBlog,
    };
};
