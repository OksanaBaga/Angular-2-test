var db = require('../../db.json');
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

function deleteAccount(account) {
    var deferedObject = q.defer();
    removeByAttr(db.accounts, 'id', account.id);
    deferedObject.resolve(db.accounts);
    return deferedObject.promise;
}

function editAccount(account) {
    var deferedObject = q.defer();
    db.accounts.map((x => {
        if (x.id == account.id) {
            x.accountName = account.accountName;
            x.address = account.address;
            x.phone = account.phone;
            x.fax = account.fax;
            x.city = account.city;
            x.info = account.info;
            x.contactName = account.contactName;
        }
    }))
    deferedObject.resolve(db.accounts);
    return deferedObject.promise;
}

var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
}

module.exports = {
    getList: getList,
    addAccount: addAccount,
    editAccount: editAccount,
    deleteAccount: deleteAccount
}