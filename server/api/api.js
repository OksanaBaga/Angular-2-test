var service = require('../services/crud');

function getList(req, res) {

    var result = {
        success: false,
        error: null,
    };

    service.getList().then(
        success => {
            result.success = success;
            res.send(result);
        },
        error => {
            result.error = error;
            res.send(result);
        });
};

function addAccount(req, res, next){
    var result = {
        success: false,
        error: null,
    };
console.log(req.body)
    service.addAccount(req.body).then(
        success => {
            result.success = success;
            res.send(result);
        },
        error => {
            result.error = error;
            res.send(result);
        });
}

module.exports = {
    getList: getList,
    addAccount: addAccount
}