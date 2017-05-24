import React from "react";
import PostAction from "PostAction";
var {connect} = require("react-redux");
var actions = require("actions");

class RedditPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {author, thumbnail, title, ups, permalink} = this.props.data;
        var imgSrc = "https://static5.businessinsider.com/image/51d5c5f769bedde53d000002-480/reddit-alien-blue.jpg";

        if (thumbnail !== "default" && thumbnail !== "image" && thumbnail !== "self") {
            imgSrc = thumbnail;
        }

        if (thumbnail === "nsfw") {
            imgSrc = "https://i.imgur.com/rd6jDiP.gif";
        }

        if (title.length > 70) {
            title = title.substring(0, 67) + "...";
        }

        return (
            <div className="post">
                <div className="title-image">
                    <div>
                        <h4>{author}</h4>
                        <img src={imgSrc} alt="badimg"/>
                    </div>
                </div>
                <div className="post-content">
                    <div>
                        <h6>
                            {title}
                        </h6>
                        <p>
                            Bacon ipsum dolor amet pork landjaeger fatback ham bacon ground round, biltong salami capicola chuck tail pork chop. Bresaola picanha corned beef, spare ribs chicken rump ribeye pork drumstick frankfurter cupim pork loin fatback. Prosciutto doner pork loin beef pig flank porchetta. Pancetta pork loin corned beef beef ribs short loin swine cow turkey bacon tongue capicola jowl pork chop. Salami swine meatloaf landjaeger. Leberkas biltong short ribs fatback beef.
                        </p>
                        <PostAction ups={ups} permalink={permalink}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RedditPost;
