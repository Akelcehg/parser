const express = require('express');
const app = express();
const orm = require('orm');
const models = require('./models');

let Parser = require('./classes/Parser');
let Http = require('./classes/Http');
let DynamicClass = require('./classes/DynamicClass');

const activeSites = require('./config/activeSites.json');
/*
 app.use(orm.express("mysql://username:password@host/database", {
 define: function (db, models, next) {
 models.person = db.define("person", {});
 next();
 }
 }));*/

/*activeSites.forEach((site) => {

 const carsConfig = require('./config/sites/' + site.configFile);
 const carsItemsListArray = carsConfig.cars_list_url;

 const carClass = new DynamicClass(site.className);
 //carClass.getX();

 carsItemsListArray.forEach((singleListUrl) => {
 /!*console.log(singleListUrl);
 //const carClass = new
 console.log("**");*!/
 })

 });*/

let tt = require('./models/car');
//console.log (tt());

models(function (err, db) {

    //console.log(db.models.car);

    let c = db.models.cars;

    /*c.get(1, function(err, person) {
     console.log( person.fullName());
     })*/
    /*c.find().limit(1).order('-id').all(function (err, messages) {
     if (err) return next(err);

     console.log(messages[0]['header']);
     });*/

    c.create({
        header: "Kollan",
    }, (err, items) => {
        // err - description of the error or null
        // items - array of inserted items
    });

    //console.log(err);
    /*db.load("./models", function (err) {
     // loaded!
     var Person = db.models.person;
     var Pet    = db.models.pet;
     });*/

});

module.exports = app;
