"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('SFS welcome page', function () {
    it('should navigate to inbox', function () {
        protractor_1.browser.get('http://localhost:8080');
        var e = protractor_1.element(protractor_1.by.css('.inbox button'));
        e.click();
        expect(protractor_1.browser.getTitle()).toEqual('Inbox');
        var trRows = protractor_1.element.all(protractor_1.by.css('table tbody tr'));
        trRows.count().then(function (t) {
            console.log(t);
        });
        expect(trRows.count()).toBeGreaterThan(0);
        //expect(e).toBe(null);
        // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        // element(by.css('[value="add"]')).click();
        // var todoList = element.all(by.repeater('todo in todoList.todos'));
        // expect(todoList.count()).toEqual(3);
        // expect(todoList.get(2).getText()).toEqual('write first protractor test');
        // // You wrote your first test, cross it off the list
        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
        // expect(completedAmount.count()).toEqual(2);
    });
});
//# sourceMappingURL=inbox-spec.js.map