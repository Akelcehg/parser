'use strict';

const CarModel = require('../CarModel');

class AutoRia extends CarModel {

    constructor() {
        super();
        console.log('11234');
    }

    getCarName() {
        return true;
    }
}

module.exports = AutoRia;