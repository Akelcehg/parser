'use strict';

const Http = require('./Http');
const Cheerio = require('./Cheerio');
const $ = require('cheerio');

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
        return 3;
    }

    isExists() {
        return 4;
    }

    saveCarToDb() {
        return 5;
    }

    parseWebSite() {
        return this.siteConfig;
    }
}

module.exports = Parser;