import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {frontPageReducer, commentsReducer, votesReducer} from "reducers";
// import reducer from "reducers";
import promise from "redux-promise";

export var configure = (initialState = {}) => {
    var reducers = combineReducers({
        frontPageData: frontPageReducer,
        commentsData: commentsReducer,
        upVotes: votesReducer
    });

    var store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    var createStoreWithMiddleware = applyMiddleware(promise)(createStore);

    return createStoreWithMiddleware(reducers);
};
