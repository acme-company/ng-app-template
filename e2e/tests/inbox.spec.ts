import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe("Inbox", () => {
  beforeEach(() => {
    browser.get('http://localhost:8080');
    element(by.css('.inbox button')).click();
  });

  it("should populate rows", () => {
    var trRows = element.all(by.css('table tbody tr')); 
    expect(trRows.count()).toBeGreaterThan(0);
  });

});

describe('Inbox Navigation', () => {

  it('should navigate back to home', () => {

    browser.get('http://localhost:8080/#/inbox');

    browser.executeScript('window.scrollTo(0,1000);').then(function () {
      element(by.css('#test')).click().then(() => {
        expect(browser.getTitle()).toEqual('Student Finance System');
      });
    });

  });

});
