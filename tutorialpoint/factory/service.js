/**
 * Created by Shreya on 7/6/2016.
 */
(function(angular) {
    'use strict';
    angular.module('SquareService',[])
        .factory('SquareService',function(){
            var factory={};
            factory.square=function(x){
                return x*x;
            };
            return factory;
        });
})(window.angular);