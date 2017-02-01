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

function addAccount(req, res, next) {
    var result = {
        success: false,
        error: null,
    };
    var account = JSON.parse(req.params.account);
    service.addAccount(account).then(
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