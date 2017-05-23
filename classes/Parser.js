'use strict';

const Http = require('./Http');
const Cheerio = require('./Cheerio');
const $ = require('cheerio');
let AutoRia = require('./cars/AutoRia');

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
        directLinksArray.forEach(function (directLink) {
            Parser.loadCarPage(directLink).then(carPageContent => {
                let cheerioObject = new Cheerio(carPageContent);
                let parsedCarPage = cheerioObject.parsePageToObject();
                let autoRiaCar = new AutoRia(parsedCarPage);

            }).catch(error => console.log(error))
        });
    }

    isExists() {
        return false;
    }

    saveCarToDb() {
        return 5;
    }
}

module.exports = Parser;