/**
 * Created by Shreya on 6/27/2016.
 */
(function(angular){
    'use strict';
    angular.module('propagationApp', [])
        .controller('EventController', ['$scope', function($scope) {
            $scope.count = 0;
            $scope.$on('MyEvent', function() {
                $scope.count++;
            });
        }]);
})(window.angular);


/*
 $on -  It listen on events of a given type. It can catch the event dispatched by $broadcast and $emit.
 */