import React from "react";
import RedditHeader from "RedditHeader";
import RedditPostList from "RedditPostList";
import {connect} from "react-redux";

export default class RedditClone extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RedditHeader/>
                {this.props.children}  
            </div>
        );
    }
}
