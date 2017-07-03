import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('SFS welcome page', function() {
  it('should navigate to inbox', function() {
    browser.get('http://localhost:8080');

    var e = element(by.css('.inbox button'));
    e.click();

    expect(browser.getTitle()).toEqual('Inbox');

    var trRows = element.all(by.css('table tbody tr'));
    trRows.count().then(t=> {
      console.log(t);
    });
 
    expect(trRows.count()).toBeGreaterThan(0);
    
  });
});