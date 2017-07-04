import {Config} from 'protractor';
export let config: Config = {
  framework: 'jasmine',
  specs: ['**/*.js'],
  directConnect: true,
  chromeDriver: 'c:\\Users\\kangm\\AppData\\Roaming\\npm\\chromedriver.exe',
  firefoxPath: 'c:\\Users\\kangm\\AppData\\Roaming\\npm\\geckodriver.exe',
  multiCapabilities: [
    { browserName: 'chrome'  },
    // { browserName: 'firefox' }
  ]
};
