 var app = angular.module('myApp',[]);



app.controller("EmailController",function($scope) {

        $scope.contacts = ["hi@email.com", "hello@email.com"];

        $scope.add = function() {
            $scope.contacts.push($scope.newcontact);
            $scope.newcontact = "";
        }

});