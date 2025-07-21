exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'alice_iz0n1R',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'JyCCY6qjZ4BPhoKNTrRs',
  
  services: [
    [
      'browserstack',
      {
        accessibility: false,
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true,
        opts: { forcelocal: false, localIdentifier: "wdio-appium-test-ios-repo" },
        app: process.env.BROWSERSTACK_APP_PATH || './apps/ios.simulator.wdio.native.app.v1.0.8.zip',
        
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
      deviceName: 'iPhone 14',
      platformVersion: '16',
      platformName: 'ios',
    },
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
      //percyCaptureMode: screenshot,
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
