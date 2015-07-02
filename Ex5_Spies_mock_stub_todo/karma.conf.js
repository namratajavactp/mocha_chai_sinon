module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','chai','sinon'],
    files: [
   //   '../angular.min.js',
     // '../angular-mocks.js',
      'calculator.js',
    //    'calculatorSpecWithSpies.js'
      'calculatorSpecWithSpiesTodo_soln.js'
       ],
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};