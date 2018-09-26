exports.config = {
  directConnect: true,

  suites: {
    oneway: 'spec/*Spec.js'
  },

  framework: 'jasmine',

  capabilities: {
    browserName: 'firefox',
  },

  onPrepare: () => {
    browser.waitForAngularEnabled(false)
  },

  jasmineNodeOpts: {
    showColors: true,
    displaySpecDuration: true,
    defaultTimeoutInterval: 30000
  }
}