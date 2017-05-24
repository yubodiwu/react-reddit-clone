import axios from "axios";

const URL = "https://www.reddit.com/r/all/.json";

module.exports = {
    setFrontPage: async () => {
        try {
            // var fetched = await fetch(URL);
            // var postData = await fetched.json();
            var postData = await axios.get(URL);

            return postData.data.data.children;
        } catch(error) {
            console.error(error);
        }
    },
    getComments: async (url) => {
        try {
            // var fetched = await fetch(url);
            // var commentsData = await fetched.json();
            var commentsData = await axios.get(url);

            return commentsData;
        } catch(error) {
            console.error(error);
        }
    }
}
