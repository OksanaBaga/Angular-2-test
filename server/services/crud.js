var db = require('../../db.json');
var file = '../db.json';
var q = require('q');
var jsonfile = require('jsonfile');
var fs = require("fs");


function getList() {
    var deferedObject = q.defer();
    // jsonfile.readFile(file, (err, obj) => {
    //     console.dir(obj)
        deferedObject.resolve(db.accounts);
    // })
    return deferedObject.promise;
}

function addAccount(account) {
    var deferedObject = q.defer();
    // db.accounts.push(account);
    // jsonfile.writeFileSync(file, account, {flag: 'a'})
    deferedObject.resolve(db.accounts);
    return deferedObject.promise;
}

module.exports = {
    getList: getList,
    addAccount: addAccount
}