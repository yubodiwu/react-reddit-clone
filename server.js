"use strict";

const express = require("express");
const PORT = process.env.PORT || 3001;

// create our app
var app = express();

app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] === "https") {
        res.redirect("http://" + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});

// var webpack = require("webpack");
// var WebpackDevServer = require("webpack-dev-server");
// var config = require("./webpack.config");
//
// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath
// })
// .listen(3001, "0.0.0.0", (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//
//     console.log("Running at http://0.0.0.0:3001");
// })
