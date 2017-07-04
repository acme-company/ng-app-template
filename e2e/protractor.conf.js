"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    specs: ['**/*.js'],
    directConnect: true,
    chromeDriver: 'c:\\Users\\kangm\\AppData\\Roaming\\npm\\chromedriver.exe',
    firefoxPath: 'c:\\Users\\kangm\\AppData\\Roaming\\npm\\geckodriver.exe',
    multiCapabilities: [
        { browserName: 'chrome' },
    ]
};
