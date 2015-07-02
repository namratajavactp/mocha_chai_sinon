/**
 * Created by namratam on 20-05-2015.
 */
describe('ContactController', function() {
    beforeEach(module('myapp'));

    var controller,$scope;

    beforeEach(inject(function($controller){
        $scope = {};
        controller = $controller('ContactController', { $scope: $scope });
    }));


        it('check contacts array', function() {

            expect($scope.contacts).to.exist;
            expect($scope.contacts).to.be.instanceof(Array);
            expect($scope.contacts).not.empty;
            expect($scope.contacts).to.eql([{ id:0, name: 'Angular',
                email:'hello@gmail.com',
                phone: '123-2343-44'
            }]);




          });

         it('call save method that would save "newcontact"and then check contacts array', function() {
            $scope.newcontact ={};
             $scope.newcontact.name = "jasmine";
             $scope.newcontact.email="jasmine@abc.com";
             $scope.newcontact.phone="9920366274";
             $scope.saveContact()
             expect($scope.contacts).to.eql([{ id:0, name: 'Angular',
                 email:'hello@gmail.com',
                 phone: '123-2343-44'
             },{id:1, name: 'jasmine',
                 email:'jasmine@abc.com',
                 phone: '9920366274'}]);

             expect($scope.contacts).to.have.length(3);
             expect($scope.contacts[0]).to.have.property('email');
             expect($scope.contacts).to.have.deep.property('[1].name','jasmine');
         });

});
