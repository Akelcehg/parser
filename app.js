const express = require('express');
const app = express();

let Parser = require('./classes/Parser');
let Http = require('./classes/Http');
let DynamicClass = require('./classes/DynamicClass');

const activeSites = require('./config/activeSites.json');

activeSites.forEach((site) => {

    const carsConfig = require('./config/sites/' + site.configFile);
    const carsItemsListArray = carsConfig.cars_list_url;

    const carClass = new DynamicClass(site.className);
    //carClass.getX();

    carsItemsListArray.forEach((singleListUrl) => {
        /*console.log(singleListUrl);
         //const carClass = new
         console.log("**");*/
    })

});

module.exports = app;
