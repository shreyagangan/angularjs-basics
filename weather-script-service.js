/**
 * Created by Shreya on 6/26/2016.
 */

(function(angular) {
    'use strict';
    angular.module('weather-script-service', [])
        .factory('weatherServ', ['$http', function($http) {
            $http.get('losangeles.json').success(function(data) {
                //var mainInfo = data;
                console.log(data);
            });
            return $http.get('losangeles.json');

            /*var OPEN_WEATHER_MAP_URL_PATTERN = "http://api.openweathermap.org/data/2.5/forecast/city?q=los+angeles&APPID=da3212ddf66fc2b87eb3cd10a539b1d6";
                '//query.yahooapis.com/v1/public/yql?q=select * from '+
                'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
                'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
            var currencies = ['USD', 'EUR', 'CNY'];
            var usdToForeignRates = {};

            var convert = function (amount, inCurr, outCurr) {
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            };
            */

            /*
            var weatherReport={};
            var refresh = function(location) {
                var url = "http://api.openweathermap.org/data/2.5/forecast/city?q="+
                    location.toLowerCase().replace(" ","+")+
                    "&APPID=da3212ddf66fc2b87eb3cd10a539b1d6";
                return $http.jsonp(url).then(function(response) {
                    /*
                    temperature = data.list[0].main.temp;//Convert Kelvin to F later!//['main'].temp;
                    humidity=data.list[0].main.humidity;
                    weather=data.list[0].weather[0].main;
                    windSpeed = data.list[0].wind.speed;*/
              /*
                    weatherReport['temperature'] = data.list[0].main.temp;//Convert Kelvin to F later!//['main'].temp;
                    weatherReport['humidity']=data.list[0].main.humidity;
                    weatherReport['weather']=data.list[0].weather[0].main;
                    weatherReport['windSpeed'] = data.list[0].wind.speed;
                });
            };

            //refresh();

            return {
                weatherReport: weatherReport
            };*/
        }]);
})(window.angular);