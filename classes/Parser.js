'use strict';

class Parser {

    constructor(config) {
        this.siteConfig = config;
    }

    //1)loadPageWithCarsList
    //2)getEachCarDirectLink
    //3)loadEachCarsPage
    //4)parseContent
    //5)checkIf Exists
    //6)Save to db
    //or ignore

    parseWebSite() {
        return this.siteConfig;
    }
}

module.exports = Parser;