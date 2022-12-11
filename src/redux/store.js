import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogReducer";

const store = createStore(
    blogReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
