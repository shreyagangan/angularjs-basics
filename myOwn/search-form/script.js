/**
 * Created by Shreya on 7/25/2016.
 */
var myApp=angular.module('SearchApp',['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .when("/dashboard",{
            templateUrl:"templates/dashboard.html",
            controller:"dashController"
        })
        .when("/search",{
            templateUrl:"templates/search.html",
            controller:"searchController"
        })
        .otherwise({
            redirectTo: "/dashboard"
        })
});
myApp.controller("dashController",function($scope){
    $scope.message="Dashboard!";
});
myApp.controller("searchController",function($scope){
    $scope.message="Search Page!";
});

myApp.controller("formController",function($scope,$location,$rootScope){
    $scope.queryFunction=function(){
        $location.path('/search');
        console.log($scope.searchQuery);
        $rootScope.query=$scope.searchQuery;
    };
});

myApp.controller("allController",function($scope,$rootScope){
   console.log($scope.searchQuery);
    console.log($rootScope.query);
});