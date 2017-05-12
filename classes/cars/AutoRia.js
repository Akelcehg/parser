'use strict';

const CarModel = require('../CarModel');

class AutoRia extends CarModel {

    static getInstance(value) {
        if (value === "AutoRia") {
            return new AutoRia();
        }
        throw new Error(`Could not instantiate ${value}`);
    }

    constructor() {
        super();
    }

    getX() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
    }


}

module.exports = AutoRia;