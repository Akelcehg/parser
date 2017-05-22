'use strict';

const $ = require('cheerio');

class Cheerio {

    constructor(pageContent) {
        this.pageContent = pageContent;
    }

    parsePageToObject() {
        return $.load(this.pageContent, {
            normalizeWhitespace: true
        });
    }

    cleanPage() {

    }

}

module.exports = Cheerio;