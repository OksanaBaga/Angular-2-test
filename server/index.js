module.exports = {
    start: function (port) {
        const http = require('http');
        const express = require('express');
        const router = express.Router();
        const path = require('path');
        var data = require('./db.json');
        var api = require('./api/api');
        var app = express();

        app.set('port', port);
        app.use(express.static(path.join(__dirname, '../client')));
        app.use(express.static(path.join(__dirname, '../node_modules')));

        app.get('/get', api.getList);
        app.post('/add', api.addAccount);

        router.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, "../../client/index.html"));
        });

        http.createServer(app).listen(app.get('port'), () => {
            console.log('Express HTTP server listening on port ' + app.get('port') + '...');
        });

    }
}