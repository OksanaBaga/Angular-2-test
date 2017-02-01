var db = require('../db.json');
var q = require('q');

function getList() {
    var deferedObject = q.defer();
    deferedObject.resolve(db.accounts);
    return deferedObject.promise;
}

function addAccount(account) {
    var deferedObject = q.defer();
    db.accounts.push(account);
    deferedObject.resolve(db.accounts);
    return deferedObject.promise;
}

module.exports = {
    getList: getList,
    addAccount: addAccount
}