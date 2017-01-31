var db = require('../db.json');
var q = require('q');

function getList() {
    var deferedObject = q.defer();
    console.log(db)
        // db.findById(id, (error, agent) => {
        //     if (error) {
        //         deferedObject.reject(error);
        //     } else if (agent) {
        //         delete agent.__v;
        //         deferedObject.resolve(agent);
        //     } else {
        //         deferedObject.resolve(null);
        //     }
        // });
    return deferedObject.promise;
}

module.exports = {
    getList: getList
}