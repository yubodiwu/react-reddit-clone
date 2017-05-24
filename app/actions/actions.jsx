import {setFrontPage, getComments} from "RedditAPI";

const REDDIT_URL = "https://www.reddit.com";

export var redditFetch = async () => {
    return setFrontPage()
        .then((frontPageData) => {
            return {
                type: "REDDIT_FETCH",
                payload: frontPageData
            };
        });
};

export var commentsFetch = (commentsUrl) => {
    return getComments(commentsUrl)
        .then((commentsData) => {
            return {
                type: "COMMENTS_FETCH",
                payload: commentsData
            };
        });
};

export var setUpVotes = (upVotes) => {
    return {
        action: "SET_UP_VOTES",
        payload: upVotes
    };
};

export var upVote = (postKey) => {
    return {
        type: "UP_VOTE",
        payload: postKey
    };
};

export var downVote = (postKey) => {
    return {
        type: "DOWN_VOTE",
        payload: postKey
    };
};
