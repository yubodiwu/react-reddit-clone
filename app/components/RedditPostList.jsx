import React from "react";
import RedditPost from "RedditPost";
import {setFrontPage} from "RedditAPI";
import {connect} from "react-redux";
import promise from "redux-promise";

var actions = require("actions");

class RedditPostList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("component mounted");
        this.frontPage();
    }

    async frontPage() {
        var {dispatch} = this.props;

        // dispatch(actions.setUpVotes());
        dispatch(actions.redditFetch());
    }

    render() {
        var key = 0;
        var frontPagePosts = this.props.frontPageData;

        var renderPosts = (args) => {
            if (frontPagePosts.length === 0) {
                return <h4 className="container">Loading Posts...</h4>;
            }

            return frontPagePosts.map((post) => {
                return <RedditPost key={key++} {...post}/>;
            })
        }

        return (
            <div className="column small-centered medium-10 large-9">
                {renderPosts()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            frontPageData: state.frontPageData,
            upVotes: state.upVotes
        };
    }
)(RedditPostList);
