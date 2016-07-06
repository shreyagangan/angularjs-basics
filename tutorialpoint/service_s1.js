/**
 * Created by Shreya on 7/6/2016.
 */
(function(angular) {
    'use strict';
    angular.module('MyCalculator',[])
        /*.factory('MultiService',function(){
            var factory={};
            factory.multiply=function(x,y)
            {
                return x*y
            }
            return factory;
        })*/
        .service('SquareService',function(){
            this.square=function(x){
                //return MultiService.multiply(x,x);
                return x*x;
            }
        });
})(window.angular);