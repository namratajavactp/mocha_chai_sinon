describe('Controller: public/AboutController', function() {

    var scope,rootScope;


    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller){
        rootScope = $rootScope;
        scope = $rootScope.$new();

         $controller('EmailController', {
            $scope: scope });

    }));

    it('test contacts array', function() {
      //  expect(scope.contacts).to.eql(["hi@email.com", "hello@email.com"]);
        var foo=scope.contacts;
        var foo1 =["hi@email.com", "hello@email.com"];

        expect(foo).to.eql(foo1);
        foo.should.have.length(2);
        expect(foo).to.have.length.within(2,4);
        foo.should.have.length.within(2,4);

    });


    it('call add function.', function() {
        scope.newcontact= "jasmine@test.com";
        scope.add();
        var foo=scope.contacts;
        var foo1 = ["hi@email.com", "hello@email.com","jasmine@test.com"];

      //  expect(scope.contacts).to.eql(["hi@email.com", "hello@email.com","jasmine@test.com"]);
        foo.should.have.length(3);
        expect(foo).to.have.length.above(2);

        foo.should.eql(foo1);
        expect(foo).to.include("hello@email.com");
    });

});