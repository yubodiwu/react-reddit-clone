import React, {Component} from "react";
import {getComments} from "RedditAPI";
import RedditComment from "RedditComment";
import {connect} from "react-redux";

class RedditCommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var key = 0;
        var commentsData = this.props.commentsData;
        
        var renderComments = () => {
            if (commentsData.length === 0) {
                return <h4 className="container">Loading Comments...</h4>
            }

            console.log(commentsData);
            return commentsData.data[1].data.children.map((comment) => {
                var {author, body, created} = comment.data;

                return <RedditComment
                    key={++key}
                    author={author}
                    body={body}
                    created={created}></RedditComment>
            });
        }

        return (
            <div className="column small-centered medium-10 large-9">
                {renderComments()}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        commentsData: state.commentsData
    };
})(RedditCommentList);
