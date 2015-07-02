/**
 * Created by namratam on 20-05-2015.
 */
describe('ContactController', function() {

    //todo:load module before testing


    var controller,$scope;

    //todo:instantiate scope object and controller instance
    beforeEach(inject(function($controller){

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


    it('test delete method and then check contacts array',function(){});

    it('test edit method and then check contacts array',function(){});


});
