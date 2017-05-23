'use strict';

const Promise = require('bluebird');
const async = require('async');
const pEachSeries = require('p-each-series');
const Http = require('./Http');
const Cheerio = require('./Cheerio');
const $ = require('cheerio');
const AutoRia = require('./cars/AutoRia');

class Parser {

    constructor(carsListUrl) {
        this.carsListUrl = carsListUrl;
    }

    //1)loadPageWithCarsList
    //2)getEachCarDirectLink
    //3)loadEachCarsPage
    //4)parseContent
    //5)checkIf Exists
    //6)Save to db
    //or ignore

    loadCarsListPage() {
        let httpClient = new Http(this.carsListUrl);
        return httpClient.getPageContent();
    }

    static getCarsDirectLinks(carsListPageContent) {
        let cheerioObject = new Cheerio(carsListPageContent);
        let parsedPage = cheerioObject.parsePageToObject();
        let linksArray = [];

        parsedPage('.ticket-item').each(function (i, elem) {
            linksArray.push($(this).find('.content-bar > div.content .head-ticket .item .address').attr('href'));
        });
        return linksArray;
    }

    static loadCarPage(directLink) {
        let httpClient = new Http(directLink);
        return httpClient.getPageContent();
    }

    static processDirectLinksArray(directLinksArray) {

        //for (let i = 0, len = directLinksArray.length; i < len; i++) {
        /*let index = 0;
         let end = directLinksArray.length;*/

        //Parser.processCar(directLinksArray[0]);


        /*const iterator = el => Parser.loadCarPage(el); //=> Promise
         console.log ('123123');
         pEachSeries(directLinksArray, iterator).then(result => {
         console.log(result);
         //=> ['unicorn', 'rainbow', 'pony']
         });*/

        /*Parser.loadCarPage(directLinksArray[i]).then(carPageContent => {
         let cheerioObject = new Cheerio(carPageContent);
         let parsedCarPage = cheerioObject.parsePageToObject();
         let autoRiaCar = new AutoRia(parsedCarPage);
         autoRiaCar.setCarAttrubites();
         console.log(autoRiaCar.getCarAttributes());
         }).catch(error => console.log(error));*/

        //}

        var items = [directLinksArray[0],directLinksArray[1],directLinksArray[2]];
        console.log(items);
        Promise.each(items, function (item) {
            console.log('start processing item:', item);

            return Parser.loadCarPage(item).then(carPageContent => {
                let cheerioObject = new Cheerio(carPageContent);
                let parsedCarPage = cheerioObject.parsePageToObject();
                let autoRiaCar = new AutoRia(parsedCarPage);
                autoRiaCar.setCarAttrubites();
                console.log(autoRiaCar.getCarAttributes());
            }).catch(error => console.log(error));

        }).then(function () {
            console.log('All tasks are done now...');
        }).catch(function () {
            console.log('Got an error')
        });

    }

    static processCar(link) {
        Parser.loadCarPage(link).then(carPageContent => {
            let cheerioObject = new Cheerio(carPageContent);
            let parsedCarPage = cheerioObject.parsePageToObject();
            let autoRiaCar = new AutoRia(parsedCarPage);
            autoRiaCar.setCarAttrubites();
            console.log(autoRiaCar.getCarAttributes());
        }).catch(error => console.log(error));
    }

    isExists() {
        return false;
    }

    saveCarToDb() {
        return 5;
    }
}

module.exports = Parser;