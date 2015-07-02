/**
 * Created by namratam on 20-05-2015.
 */
describe('Greet Controller Test', function() {

    beforeEach(module('myapp'));
    var greetController,scope;

    beforeEach(inject(function($controller){
        // The injector unwraps the underscores (_) from around the parameter names when matching
       scope = {};
        greetController = $controller('GreetController', { $scope: scope });
    }));

    it('test myname1 after invoking greet!', function() {


        scope.myname="nisha";
        scope.greet();
        expect(scope.myname1).to.equal("hello  nisha");
        expect(scope.myname1).to.contain('nisha');
        scope.myname1.should.be.a('string');

     //   instanceof will work with String created with new String() and not String literal
      //  expect(scope.myname1).to.be.instanceof(String);

    });

    //http://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals

});
