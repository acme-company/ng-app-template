"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Inbox", function () {
    beforeEach(function () {
        protractor_1.browser.get('http://localhost:8080');
        protractor_1.element(protractor_1.by.css('.inbox button')).click();
    });
    it("should populate rows", function () {
        var trRows = protractor_1.element.all(protractor_1.by.css('table tbody tr'));
        expect(trRows.count()).toBeGreaterThan(0);
    });
});
describe('Inbox Navigation', function () {
    it('should navigate back to home', function () {
        protractor_1.browser.get('http://localhost:8080/#/inbox');
        protractor_1.browser.executeScript('window.scrollTo(0,1000);').then(function () {
            protractor_1.element(protractor_1.by.css('#test')).click().then(function () {
                expect(protractor_1.browser.getTitle()).toEqual('Student Finance System');
            });
        });
    });
});
