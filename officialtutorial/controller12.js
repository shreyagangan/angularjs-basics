/**
 * Created by Shreya on 6/28/2016.
 */
/*
 angular.module().controller();
 .controller('ControllerName',function(){
 })
 */
(function(angular) {
    'use strict';
    angular.module('heroApp', []).controller('mainCtrl', function() {
        this.hero = {
            name: 'Spawn'
        };
    });
})(window.angular);