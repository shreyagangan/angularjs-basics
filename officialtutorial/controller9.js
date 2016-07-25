/**
 * Created by Shreya on 6/27/2016.
 */
var myApp=angular.module('scopeExample',[]);
myApp.controller('MyController',['$scope',function($scope){

    /*Initialize*/
    $scope.username="World";

    $scope.sayHello=function()
    {
      $scope.greeting="Hello "+$scope.username+"!";
    };
}]);