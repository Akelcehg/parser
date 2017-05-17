const express = require('express');
const app = express();
const models = require('./models');

let Parser = require('./classes/Parser');
let Http = require('./classes/Http');
let DynamicClass = require('./classes/DynamicClass');

const activeSites = require('./config/activeSites.json');

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const Car = require('./models').Car;

Car.create().then(todo => {
    console.log(' * * * * ' + todo)
}).catch(error => {
    console.log(error.errors)
});

/*Car.create(/!*{
 header: "qqqqwwwweeeeer",
 }*!/)
 .then(todo => console.log('321'))
 .catch(error => console.log(error));*/

module.exports = app;