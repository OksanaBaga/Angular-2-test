var service = require('../services/crud');

function getList(req, res) {

    var result = {
        success: false,
        error: null,
    };

    var agent = req.body.agentData;

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

module.exports = {
    getList: getList
}