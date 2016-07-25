/**
 * Created by Shreya on 6/27/2016.
 */
(function (angular) {
    'use strict';
    angular.module('httpApp',[])
        .controller('jsonController',['$scope', '$http', function($scope,$http){
            $scope.readJSON=function(){
               $http.get('losangeles.json').success(function(data, status, headers, config) {
                   $scope.localWeatherReport= data;
               });
            };

            $scope.readfromURL=function(){
                //http://api.openweathermap.org/data/2.5/forecast/city?q=los+angeles&APPID=da3212ddf66fc2b87eb3cd10a539b1d6
                var city=$scope.city;
                var URL='http://api.openweathermap.org/data/2.5/forecast/city?q='+
                    city.toLowerCase().replace(" ","+")+
                    '&APPID=da3212ddf66fc2b87eb3cd10a539b1d6';
                $http.get(URL).success(function(data, status, headers, config) {
                    $scope.weatherReport= data;
                });;
            };
        }]);
})(window.angular);