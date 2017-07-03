import * as webdriver from 'selenium-webdriver';

let by = webdriver.By;
let until = webdriver.until;

describe("my suite", () => {

    beforeEach(() => {
    })

    afterEach(() => {
    })
    
    it("should work", () => {
        console.log("==========>");
        let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build();
        driver.get("https://www.google.com")
        .then(s => {
            return driver.getTitle();
        })
        .then(title => { console.log(title) })
        console.log("<==========");
    })
});