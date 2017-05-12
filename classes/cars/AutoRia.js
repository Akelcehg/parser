'use strict';

const CarModel = require('../CarModel');

class AutoRia extends CarModel {

    constructor(x) {
        super();
        this.x = x;
    }

    getX() {
        return this.x;
    }
}

module.exports = AutoRia;