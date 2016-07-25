/**
 * Created by Shreya on 7/6/2016.
 */
(function(angular) {
    'use strict';
    angular.module('MultiService',[])
        .factory('MultiService',function(){
            var factory={};
            factory.multiply=function(x,y){
                return x*y;
            };
            return factory;
        });
    angular.module('SquareService',[])
        .service('SquareService',function(MultiService){
            this.square=function(x)
            {
                return MultiService.multiply(x,x);
            };

        });
})(window.angular);