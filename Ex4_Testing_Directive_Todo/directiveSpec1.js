/**
 * Created by namratam on 15-05-2015.
 */
describe('Unit testing great quotes', function() {
    var compile,
        rootScope,scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('myApp'));

    // Store references to $scope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function($compile, $rootScope){

        compile = $compile;
        scope = $rootScope.$new();
    }));

    it('Replaces the element with the appropriate content', function() {

         scope.customer = {
            name: 'MochaWithChai',
            address: '1600 Citiustech'
        };


        var element ="<div my-customer></div>";

        //todo:Compile a piece of HTML containing the directive
            element = compile(element)(scope);

        // todo:fire all the watches, so the scope expression 'name' and 'address' will be evaluated
        scope.$digest();

        //todo:Check that the compiled element contains the templated content

    });
});

//http://angular-tips.com/blog/2014/06/introduction-to-unit-test-directives/
//http://blog.revolunet.com/blog/2013/12/05/unit-testing-angularjs-directive/


/*
$compile - Compiles an HTML string or DOM
into a template and produces a template function, which can then be
used to link scope and the template together.
 */