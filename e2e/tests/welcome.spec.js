"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('SFS welcome page', function () {
    it('should have the right title', function () {
        protractor_1.browser.get('http://localhost:8080');
        expect(protractor_1.browser.getTitle()).toEqual('Student Finance System');
    });
    it('should navigate to inbox', function () {
        protractor_1.browser.get('http://localhost:8080');
        var e = protractor_1.element(protractor_1.by.css('.inbox button'));
        e.click();
        expect(protractor_1.browser.getTitle()).toEqual('Inbox');
    });
});
