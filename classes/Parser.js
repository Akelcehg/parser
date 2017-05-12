'use strict';

class Parser {

    constructor(config) {
        this.siteConfig = config;
    }

    parseWebSite() {
        return this.siteConfig;
    }
}

module.exports = Parser;