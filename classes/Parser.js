'use strict';

const Http = require('./Http');

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

    getCarsDirectLinks() {
        return new Promise((resolve, reject) => {
            resolve('test');
        });
    }

    loadCarPage() {
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