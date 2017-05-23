'use strict';

const CarModel = require('../CarModel');

class AutoRia extends CarModel {

    constructor(parsedCarPage) {
        super();
        this.carPageContent = parsedCarPage;
        this.carAttributes = {
            "name": "",
            "link": "",
            "price_usd": "",
            "price_uah": "",
            "run": "",
            "year": "",
            "images": "",
            "transport_type": "",
            "body_type": "",
            "engine_type": "",
            "engine_capacity": "",
            "city_id": "",
            "drive_type": "",
            "owner_id": "",
        };
    }

    setCarAttrubites() {

    }

    getCarAttributes() {
        return this.carAttributes;
    }

}

module.exports = AutoRia;