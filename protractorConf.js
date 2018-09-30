exports.config = {
  directConnect: true,

  suites: {
    oneway: 'spec/*Spec.js'
  },

  framework: 'jasmine',

  capabilities: {
    browserName: 'chrome',
  },

  onPrepare: () => {
    browser.manage().window().setSize(1024, 800),
    browser.waitForAngularEnabled(false)
  },

  jasmineNodeOpts: {
    showColors: true,
    displaySpecDuration: true,
    defaultTimeoutInterval: 30000
  }
}