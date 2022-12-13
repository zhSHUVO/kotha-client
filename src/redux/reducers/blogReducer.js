import {
    ADD_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
    LOAD_SPECIFIC_CONTENT,
    UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    specificBlog: {},
};


const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTENT:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };

        case GET_CONTENT:
            return {
                ...state,
                blogs: action.payload,
            };

        case LOAD_SPECIFIC_CONTENT:
            return {
                ...state,
                specificBlog: action.payload,
            };

        case UPDATE_CONTENT:
            return {
                ...state,
                blogs: [
                    ...state.blogs.filter(
                        (blog) => blog._id !== action.payload._id
                    ),
                    action.payload,
                ],
            };

        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default blogReducer;
