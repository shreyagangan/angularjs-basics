/**
 * Created by Shreya on 7/10/2016.
 */
angular.module('weatherPromiseApp', [])
    .controller('weatherController',
        function($log, $scope, weatherService, fiveDayReportService) {
            $scope.getWeatherReport = function(city) {
                var promise =
                    weatherService.getWeather(city);
                promise.then(
                    function(payload) {
                        $scope.allWeatherReport = payload.data;
                        console.log(payload.status);
                        $scope.fiveDayReport=fiveDayReportService.getfiveDayReport(payload.data);
                        console.log($scope.fiveDayReport);
                    },
                    function(errorPayload) {
                        $log.error('failure loading weather', errorPayload);
                    });
            };
        })
    .factory('weatherService', function($http) {
        return {
            getWeather: function(city) {
                var URL='http://api.openweathermap.org/data/2.5/forecast/city?q='+
                    city.toLowerCase().replace(" ","+")+
                    '&APPID=da3212ddf66fc2b87eb3cd10a539b1d6';
                return $http.get(URL);
            }
        }
    })
    .service('fiveDayReportService',function(){
        this.getfiveDayReport=function(data){
            var fivedayweather=[{}];
            /*Five Day*/
            var count=0;
            var noofdays=0;
            var prevday="";
            while(noofdays<5 && count<40)
            {
                var date = new Date(data.list[count]['dt_txt']);
                var noOfday = date.getDay();
                var daymap={0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
                var daytoday = daymap[noOfday];
                if(prevday.valueOf()!=daytoday.valueOf())
                {
                    var weathertoday={
                        'dayNum':noofdays,
                        'temperature': ((data.list[count].main.temp * 1.8) - 459.67).toPrecision(2),//kelvinToF(data.list[count].main.temp),
                        'humidity':data.list[count].main.humidity,
                        'weather':data.list[count].weather[0].main,
                        'windspeed':data.list[count].wind.speed,
                        'date':date,
                        'day':daytoday
                    };
                    fivedayweather.push(weathertoday);
                    noofdays++;
                }
                prevday=daytoday;
                count++;
            };
            fivedayweather.splice(0,1);
            return fivedayweather;
        };
    });