var frontPageReducer = (state = [], action) => {
    switch (action.type) {
        case "REDDIT_FETCH":
            return action.payload;
        case "COMMENTS_FETCH":
            return action.payload;
        default:
            return state;
    }
};

var commentsReducer = (state = [], action) => {
    switch (action.type) {
        case "COMMENTS_FETCH":
            return action.payload
        default:
            return state;
    }
};

var votesReducer = (state = [], action) => {
    switch (action.type) {
        case: "SET_UP_VOTES":
            return action.payload;
        default:
            return state;
    }
};

module.exports = {
    frontPageReducer,
    commentsReducer
}



// export default var reducer = (state = {frontPageData: []}, action) => {
//     switch (action.type) {
//         case "REDDIT_FETCH":
//             return {
//                 frontPageData: action.payload
//             };
//         case "COMMENTS_FETCH":
//             return {
//                 commentsData: action.payload
//             };
//         default:
//             return state;
//     }
// };
