const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});


module.exports.configure = function (server) {
    server.use(router);
};