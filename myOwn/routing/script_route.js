/**
 * Created by Shreya on 7/11/2016.
 */
var myApp=angular.module('RoutingApp',['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .when("/home",{
            templateUrl:"Templates/home.html",
            controller:"homeController"
        })
        .when("/courses",{
            templateUrl:"Templates/courses.html",
            controller:"coursesController"
        })
        .when("/students",{
            templateUrl:"Templates/students.html",
            controller:"studentsController"
        })
        .otherwise({
            redirectTo: "/home"
        })
});
myApp.controller("homeController",function($scope){
    $scope.message="Hello from the other side!";
});
myApp.controller("coursesController",function($scope){
    $scope.courses=["HTML","AngularJS","Java","C++"];
});
myApp.controller("studentsController",function($scope){
    $scope.courses=["Harry","Hermione","Ron","Ginny"];
});