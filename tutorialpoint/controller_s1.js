/**
 * Created by Shreya on 7/6/2016.
 */
(function(angular){
    'use strict';
    angular.module('MyCalculator',[])
        /*
        .service('SquareService',function(){
            this.square=function(x){
                return x*x;
            };
        })*/
        .factory('SquareService',function(){
            var factory={};
            factory.square=function(x){
                return x*x;
            };
            return factory;
        })
        .controller('CalController',['$scope','SquareService',function($scope,SquareService){
            $scope.squaring=function()
            {
                $scope.result=SquareService.square($scope.inputNum);
            };
        }]);
})(window.angular);