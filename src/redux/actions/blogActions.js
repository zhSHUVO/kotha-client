import { ADD_CONTENT } from "../actionTypes/actionTypes";

export const addContent = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog,
    };
};
