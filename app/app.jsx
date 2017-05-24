import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Router, IndexRoute, hashHistory} from "react-router";

import RedditClone from "RedditClone";
import RedditPostList from "RedditPostList";
import RedditCommentList from "RedditCommentList";
import RedditAPI from "RedditAPI";

var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
    var state = store.getState();
    console.log("New state", state);
});

// Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={RedditClone}>
                <Route path="/comments" component={RedditCommentList}></Route>
                <IndexRoute component={RedditPostList}></IndexRoute>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);
