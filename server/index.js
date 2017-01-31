module.exports = {
    start: function (port) {
        const http = require('http');
        const express = require('express');
        const router = express.Router();
        const path = require('path');
        var data = require('./db.json');
        var api = require('./api/api');
        // var jsonServer = require('json-mock')

        // var server = jsonServer.create()
        // server.use(jsonServer.defaults)
        // server.use(jsonServer.router('db.json'))



        var app = express();

        app.set('port', port);
        app.use(express.static(path.join(__dirname, '../client')));
        app.use(express.static(path.join(__dirname, '../node_modules')));
        // app.get('/accounts', function (req, res) {
        //     console.log('hello')
        //     res.jsonp(data)
        // })
        router.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, "../../client/index.html"));
        });
        router.get('/lists', api.getList);
        // router.configure(server);
        // server.listen(port, function () {
        //     console.log('JSON Server is running...')
        // })

        http.createServer(app)
        app.listen(app.get('port'), () => {
            console.log('Express HTTP server listening on port ' + app.get('port') + '...');
        });

    }
}