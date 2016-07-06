/**
 * Created by Shreya on 6/28/2016.
 */
/*
 angular.module('ModuleName').component('componentName',{ComponentConfigobject});
 Component Config Object:
 {templateURL:'',
 controller:''
 bindings:{}}
 */
(function(angular) {
    'use strict';
    function HeroDetailController() {

    }

    angular.module('heroApp').component('heroDetail', {
        templateUrl: 'file12-heroDetail.html',
        controller: HeroDetailController,
        bindings: {
            hero: '='
        }
    });
})(window.angular);