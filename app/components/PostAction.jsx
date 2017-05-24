import React, {Component} from "react";
import {getComments} from "RedditAPI";
import {connect} from "react-redux";

var actions = require("actions");

class PostAction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ups: this.props.ups,
            upvoted: false,
            downvoted: false,
        }

        this.onUpVote = this.onUpVote.bind(this);
        this.onDownVote = this.onDownVote.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    onUpVote() {
        if (!this.state.upvoted) {
            console.log("up voted");
            var {dispatch} = this.props;
            console.log(this.props.key);
            dispatch(actions.upVote(this.props.key));

            this.setState({
                ups: this.state.ups + 1,
                upvoted: true,
                downvoted: false
            });
        }
    }

    onDownVote() {
        if (!this.state.downvoted) {
            console.log("down voted");

            this.setState({
                ups: this.state.ups - 1,
                upvoted: false,
                downvoted: true
            });
        }
    }

    async renderComments() {
        var {dispatch} = this.props;
        const commentsUrl =" https://www.reddit.com" + this.props.permalink + ".json";
        dispatch(actions.commentsFetch(commentsUrl));

        window.location.hash = "#/comments"
    }

    render() {
        return (
            <div className="post-action">
                <ul className="menu">
                    <li>
                        <button onClick={this.renderComments}>Comments</button>
                    </li>
                    <li>
                        <button onClick={this.onDownVote}>
                            <i className="material-icons">thumb_down</i>
                        </button>
                    </li>
                    <li>
                        <button onClick={this.onUpVote}>
                            <i className="material-icons">thumb_up</i>
                        </button>
                    </li>
                    <li>Upvotes: {this.state.ups % 400}</li>
                </ul>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        commentData: state.commentData,
        frontPageData: state.frontPageData
    };
})(PostAction);
