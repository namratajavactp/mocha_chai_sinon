module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','chai','sinon','sinon-chai'],
    files: [
      '../angular.min.js',
      '../angular-mocks.js',
      '../jquery.min.js',
      'serverApp.js',
      'serverAppSpec1.js'
      // 'sinon_fake_server.js'

    ],
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};