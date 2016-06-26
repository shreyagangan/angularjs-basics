/**
 * Created by Shreya on 6/25/2016.
 */
(function(angular)    {
    'use strict';
    angular.module('weatherApp2',[])
        .controller('UserLocation2',function(){
            //this.location="Los Angeles";
            this.locate= function locate()
            {
                if(this.location)
                {

                    //$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city.name).success(function(data, status, headers, config) {}
                    $http({
                        method: 'GET',
                        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + this.location
                    }).then(function successCallback(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        window.alert(this.location);
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        window.alert("Error!");
                    });
                }
                else
                {
                    window.alert("You need to enter something!");
                }
            };
        });

})(window.angular);