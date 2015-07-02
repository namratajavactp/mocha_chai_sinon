module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','sinon'],
    files: [
      '../angular.min.js',
      '../angular-mocks.js',
      '*.js'
    ],
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};