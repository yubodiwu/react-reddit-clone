import React from "react";
import {Link, IndexLink} from "react-router";

export default class RedditHeader extends React.Component {
    render() {
        return (
            <ul className="menu nav">
                <li><a href="#">Reddit Clone</a></li>
                {/* <li id="add-post">
                    <i className="material-icons">add</i>
                    <div>Post</div>
                </li>
                <li id="search">
                    <form>
                        <input type="search" placeholder="look for post"/>
                    </form>
                </li> */}
            </ul>
        );
    }
}
