import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('angularjs homepage todo list', function() {
  it('should navigate to inbox', function() {
    browser.get('http://localhost:8080');

    var e = element(by.css('widget[class="\inbox"]'));
    expect(e).toBe(null);
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