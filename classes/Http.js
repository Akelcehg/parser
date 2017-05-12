'use strict';

const Nightmare = require('nightmare');
const nightmare = Nightmare({
    show: true,
    webPreferences: {
        images: false,
    }
});

class Http {

    constructor(url) {
        let pageContent;
        this.url = url;
    }

    getPageContent() {
        return nightmare.goto(this.url)
            .scrollTo(10000000, 0)
            .wait(3000)
            .evaluate(function () {
                return document.documentElement.outerHTML;
            })
            .end()
        /*.then(function (result) {
         return result;
         })*/
        /*            .catch(function (error) {
         console.error('Search failed:', error);
         });*/
        //return this.pageContent;
    }

    cleanPage() {

    }

}

module.exports = Http;