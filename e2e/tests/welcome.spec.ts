import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('SFS welcome page', function() {
  it('should have the right title', function() {
    browser.get('http://localhost:8080');
  

    expect(browser.getTitle()).toEqual('Student Finance System');

      
  });
  
  it('should navigate to inbox', function() {
    browser.get('http://localhost:8080');

    var e = element(by.css('.inbox button'));
    e.click();

    expect(browser.getTitle()).toEqual('Inbox');    
  });

});

