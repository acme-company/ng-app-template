import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

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

describe('SFS welcome page',() => {
  beforeEach(() => {
    browser.get('http://localhost:8080');
    element(by.css('.inbox button')).click();
  });

  it('should navigate back to home', () => {
    browser.sleep(5000);
    browser.executeScript('window.scrollTo(0,700);').then(function () {
    browser.sleep(5000);
        element(by.css('#returnHome')).click();
        expect(browser.getTitle()).toEqual('Student Finance System');
    });

  });

});
