import React, {Component} from "react";
import moment from "moment";

export default class RedditComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {author, body, created} = this.props;

        return (
            <div className="comment">
                <div className="comment-header">
                    <h4>{author}</h4>
                    <p>{"Posted " + moment.unix(created).format('MMM Do YYYY @ h:mm a')}</p>
                    <div className="comment-content">
                        <p className="comment-content">{body}</p>
                    </div>
                </div>
            </div>
        );
    }
}
