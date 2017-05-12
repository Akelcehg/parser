const express = require('express');
const app = express();
/*
 var path = require('path');
 var favicon = require('serve-favicon');
 var logger = require('morgan');
 var cookieParser = require('cookie-parser');
 var bodyParser = require('body-parser');

 var index = require('./routes/index');
 var users = require('./routes/users');

 var app = express();

 // view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'jade');

 // uncomment after placing your favicon in /public
 //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'public')));

 app.use('/', index);
 app.use('/users', users);

 // catch 404 and forward to error handler
 app.use(function (req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
 });

 // error handler
 app.use(function (err, req, res, next) {
 // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render('error');
 });
 */


/*
 var Nightmare = require('nightmare');
 var nightmare = Nightmare({show: false});

 nightmare
 .goto('https://duckduckgo.com')
 //.type('#search_form_input_homepage', 'github nightmare')
 //.click('#search_button_homepage')
 //.wait('#zero_click_wrapper .c-info__title a')
 .evaluate(function () {
 return document.documentElement.outerHTML;
 })
 .end()
 .then(function (result) {
 var fs = require('fs');
 fs.writeFile("test.html", result, function (err) {
 if (err) {
 return console.log(err);
 }

 console.log("The file was saved!");
 });
 })
 .catch(function (error) {
 console.error('Search failed:', error);
 });
 */

/*let AutoRia = require('./classes/AutoRia');

 let ria = new AutoRia(123);
 console.log(ria.getX());
 console.log(ria.isCar());*/

/*let Http = require('./classes/Http');

 let httpClient = new Http("https://duckduckgo.com");

 httpClient.getPageContent().then(function (result) {
 console.log('321321');
 console.log(result);
 }).catch(function (error) {
 console.error('Search failed:', error);
 });*/

let Parser = require('./classes/Parser');
let Http = require('./classes/Http');

const config = {
    "test": "aaaa"
};

let siteParser = new Parser(config);

console.log(siteParser.parseWebSite());

let h = new Http("https://auto.ria.com/legkovie/?page=1");
h.getPageContent().then(function (result) {
    var fs = require('fs');
    fs.writeFile("test.html", result, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}).catch(function (error) {
    console.error('Search failed:', error);
});

module.exports = app;
