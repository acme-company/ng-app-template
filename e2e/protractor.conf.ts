import { Config } from 'protractor';
export let config: Config = {
  framework: 'jasmine',
  specs: ['**/*.js'],
  directConnect: true,
  chromeDriver: 'c:\\Users\\kangm\\AppData\\Roaming\\npm\\chromedriver.exe',
  firefoxPath: 'c:\\Users\\kangm\\AppData\\Roaming\\npm\\geckodriver.exe',
  multiCapabilities: [
    // {
    //   browserName: 'chrome',
    //   chromeOptions: {
    //     args: ['--window-size=3000,2000'] 
    //   }
    // },
    {
      browserName: 'chrome',
      chromeOptions: {
        mobileEmulation: {
          deviceName: 'Galaxy S5'
        }
      }
    },

    // { browserName: 'firefox' }
  ],
  jasmineNodeOpts: {
    showColors: true
  }
};
