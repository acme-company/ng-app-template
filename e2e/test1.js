"use strict";
exports.__esModule = true;
var webdriver = require("selenium-webdriver");
var by = webdriver.By;
var until = webdriver.until;
describe("my suite", function () {
    beforeEach(function () {
    });
    afterEach(function () {
    });
    it("should work", function () {
        console.log("==========>");
        var driver = new webdriver.Builder()
            .forBrowser("chrome")
            .build();
        driver.get("https://www.google.com")
            .then(function (s) {
            return driver.getTitle();
        })
            .then(function (title) { console.log(title); });
        console.log("<==========");
    });
});
