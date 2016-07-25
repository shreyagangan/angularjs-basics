/**
 * Created by Shreya on 6/26/2016.
 */
var inheritApp=angular.module('inheritApp',[]);
inheritApp.controller('MainController',['$scope',function($scope){
    $scope.timeOfDay = 'morning';
    $scope.name = 'James';
}]);

inheritApp.controller('ChildController',['$scope',function($scope){
    $scope.name = 'Harry';
}]);

inheritApp.controller('GrandChildController',['$scope',function($scope){
    $scope.timeOfDay = 'evening';
    $scope.name = 'Albus';
}]);