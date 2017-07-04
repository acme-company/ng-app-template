"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('SFS welcome page', function () {
    it('should navigate to inbox', function () {
        protractor_1.browser.get('http://localhost:8080');
        var e = protractor_1.element(protractor_1.by.css('.inbox button'));
        e.click();
        expect(protractor_1.browser.getTitle()).toEqual('Inbox');
    });
});
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
//# sourceMappingURL=inbox.spec.js.map