/**
 * Created by Shreya on 7/6/2016.
 */
(function(angular) {
    'use strict';
    angular.module('SquareService',[])
        .service('SquareService',function(){
            this.square=function(x){
                return x*x;
            };
        });
})(window.angular);