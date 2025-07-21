exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'alice_iz0n1R',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'JyCCY6qjZ4BPhoKNTrRs',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        accessibility: false,
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true,
        opts: { forcelocal: false, localIdentifier: "wdio-appium-test-repo" },
        //app: 'bs://c29ee7f0676f9b55507a77f102054965dbd4b3fd',
        app: process.env.BROWSERSTACK_APP_PATH || './apps/android.wdio.native.app.v1.0.8.apk',
        
        /*testObservabilityOptions: {
              buildName: "bstack-webdriverio",
              projectName: "wdio-appium-test",
              buildTag: 'Any build tag goes here. For e.g. ["Tag1","Tag2"]'
        },*/
      },
    ]
  ],
  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22 Ultra',
      platformVersion: '12.0',
      platformName: 'android',
    }
  }, {
    'bstack:options': {
      deviceName: 'Google Pixel 7 Pro',
      platformVersion: '13.0',
      platformName: 'android',
    } }, {
    'bstack:options': {
      deviceName: 'OnePlus 9',
      platformVersion: '11.0',
      platformName: 'android',
    }
  }],
  commonCapabilities: {
    'bstack:options': {
      projectName: "wdio-appium-test",
      buildName: "bstack-webdriverio",
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0',
      //percy: true,
      //percyCaptureMode: auto
    }
  },
  maxInstances: 10,

  // other configurations
  updateJob: false,
  specs: [
    '/workspace/wdio-appium-test/test/specs/*.js',
  ],
  // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  },

  reporters: ['spec', ['allure', {
        outputDir: './allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(let key in exports.config.commonCapabilities) 
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
});
