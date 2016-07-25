/**
 * Created by Shreya on 7/6/2016.
 */
(function(angular){
    'use strict';
    angular.module('MyCalculator',['SquareService','MultiService'])
        .controller('CalController',['$scope','SquareService',function($scope,SquareService){
            $scope.squaring=function()
            {
                $scope.result=SquareService.square($scope.inputNum);
            };
        }]);
})(window.angular);