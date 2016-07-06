/*(function(angular)
    {
        'use strict';
        angular.module('weatherApp',['weather-script-service'])
    }
).window(angular);*/

var myApp= angular.module("myApp",[]);
myApp.controller('GreetingController',['$scope',function($scope){
    $scope.greeting="Hola!";
}]);

//var myApp= angular.module("myApp",[]);
myApp.controller('DoubleController',['$scope',function($scope){
    $scope.double=function (value) {
        return value * 2;
    };
}]);
