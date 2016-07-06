/**
 * Created by Shreya on 6/28/2016.
 */
/*
Changes:
app -> weatherApp
heroes -> fiveday
crisis-center -> current
 \'CrisisCenter\' -> Current
 \'Heroes\' ->FiveDay
 crisisCenter -> current
 heroes -> fiveday
 */
(function(angular) {
    'use strict';
    angular.module('weatherApp', ['ngComponentRouter', 'fiveday', 'current'])

        .config(function($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .value('$routerRootComponent', 'weatherApp')

        .component('weatherApp', {
            template:
            '<nav>\n' +
            '  <a ng-link="[\'CrisisCenter\']">Current</a>\n' +
            '  <a ng-link="[\'FiveDay\']">Five Day Weather Forecast</a>\n' +
            '</nav>\n' +
            '<ng-outlet></ng-outlet>\n',
            $routeConfig: [
                {path: '/current/...', name: 'Current', component: 'current', useAsDefault: true},
                {path: '/fiveday/...', name: 'FiveDay', component: 'fiveday' }
            ]
        });
})(window.angular);