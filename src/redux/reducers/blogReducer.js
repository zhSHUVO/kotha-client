import {
    ADD_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
    UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTENT:
            return {
                ...state,
                blogs : [...state.blogs, action.payload]
            };

        case GET_CONTENT:
            return {};

        case UPDATE_CONTENT:
            return {};

        case DELETE_CONTENT:
            return {};

        default:
            return state;
    }
};

export default blogReducer;
