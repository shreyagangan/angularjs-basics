/**
 * Created by Shreya on 6/29/2016.
 */
(function(angular){
    'use strict';
    angular.module('myViewApp',[])
        .controller('viewController',['$scope', function($scope){
            $scope.enteredCity = { cityUrl: 'defaultView_view.html' };
            $scope.citySubmit=function(){
                $scope.enteredCity = { cityUrl: 'view1_view.html' };
            };

            $scope.selectedView={ viewURL: 'currentWeather.html'};
            $scope.viewName="Current";
            $scope.viewCurrent=function(){
                $scope.viewName="Current";
                $scope.selectedView={ viewURL: 'currentWeather.html'};
            };

            $scope.viewFiveDay=function(){
                $scope.viewName="Five-Day Forecast";
                $selectedView.url={ viewURL: 'fiveDayWeather.html'};
            };
        }])
})(window.angular);