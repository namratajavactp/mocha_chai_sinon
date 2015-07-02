module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','chai','sinon'],
    files: [
      '../angular.min.js',
      '../angular-mocks.js',
      'notesApp1.js',
      // 'notesApp1SpecWithSpies.js'
      //  'notesApp1SpecWithStub.js'
        'notesApp1SpecWithMock.js'
       ],
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};