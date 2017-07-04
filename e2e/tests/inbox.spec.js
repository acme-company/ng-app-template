"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
// describe("Inbox", () => {
//   beforeEach(() => {
//     browser.get('http://localhost:8080');
//     element(by.css('.inbox button')).click();
//   });
//   it("should populate rows", () => {
//     var trRows = element.all(by.css('table tbody tr')); 
//     expect(trRows.count()).toBeGreaterThan(0);
//   });
// });
describe('SFS welcome page', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://localhost:8080');
        protractor_1.element(protractor_1.by.css('.inbox button')).click();
    });
    it('should navigate back to home', function () {
        protractor_1.browser.sleep(5000);
        protractor_1.browser.executeScript('window.scrollTo(0,700);').then(function () {
            protractor_1.browser.sleep(5000);
            protractor_1.element(protractor_1.by.css('#returnHome')).click();
            expect(protractor_1.browser.getTitle()).toEqual('Student Finance System');
        });
    });
});
