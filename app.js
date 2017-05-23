const express = require('express');
const app = express();
const models = require('./models');
const carConfig = require('./config/sites/AutoRia.json');

let Parser = require('./classes/Parser');
let Http = require('./classes/Http');
let DynamicClass = require('./classes/DynamicClass');

//const activeSites = require('./config/activeSites.json');

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

//const Car = require('./models').Car;

/*Car.create().then(todo => {
 console.log(' * * * * ' + todo)
 }).catch(error => {
 console.log(error.errors)
 });*/

/*Car.create(/!*{
 header: "qqqqwwwweeeeer",
 }*!/)
 .then(todo => console.log('321'))
 .catch(error => console.log(error));*/

//console.log(carsList);
//console.log (carsListArray);

carConfig.cars_list_url.forEach(function (carsListUrl) {
    let parser = new Parser(carsListUrl);
    parser.loadCarsListPage()
        .then(carsListPageContent => {
            let directLinksArray = Parser.getCarsDirectLinks(carsListPageContent);

            //console.log(Parser.loadCarPage(directLinksArray));
            Parser.processDirectLinksArray(directLinksArray);

        })
        .catch(function (error) {
            console.log("Fatal");
            console.log(error);
        });

})
;

module.exports = app;