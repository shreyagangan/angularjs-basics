/**
 * Created by Shreya on 6/27/2016.
 */
/*
 angular.module('myGreetApp', [])
 .controller('').controller('');
 */

(function(angular) {
    'use strict';
    angular.module('myGreetApp', [])
        .controller('GreetController',['$scope','$rootScope',function($scope,$rootScope){
            $scope.name='World';
            $rootScope.department='Hogwarts';
        }]).controller('ListController',['$scope',function($scope){
        $scope.names=['Harry','Hermione','Ron'];
    }]);
})(window.angular);
