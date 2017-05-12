let AutoRia = require('./cars/AutoRia');
//let Rst = require('./cars/Rst');

const classes = {
    AutoRia/*,
    Rst*/
};

class DynamicClass {
    constructor(className, opts) {
        console.log (className);
        return new classes[className](opts);
    }
}

module.exports = DynamicClass;