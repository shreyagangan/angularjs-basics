/**
 * Created by Shreya on 6/25/2016.
 */
(function(angular)    {
    'use strict';
    angular.module('weatherApp',['weather-script-service'])
        .controller('UserLocation',['weatherServ',function(weatherServ)
        {
            /*
            this.weatherReport=function weatherReport(w)
            {
                return weatherServ     
            };*/

            this.locate= function locate()
            {
                if(this.location)
                {
                    //http://api.openweathermap.org/data/2.5/forecast/city?q=los+angeles&APPID=da3212ddf66fc2b87eb3cd10a539b1d6
                    //$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city.name).success(function(data, status, headers, config) {}
                    //window.alert("http://api.openweathermap.org/data/2.5/forecast/city?q="+this.location.toLowerCase().replace(" ","+")+"&APPID=da3212ddf66fc2b87eb3cd10a539b1d6");
                    var URLLocation=this.location.toLowerCase().replace(" ","+");
                    //console.log("http://api.openweathermap.org/data/2.5/forecast/city?q="+URLLocation+"&APPID=da3212ddf66fc2b87eb3cd10a539b1d6");
                    console.log(URLLocation);
                    weatherServ.refresh(URLLocation);
                }
                else
                {
                    window.alert("You need to enter something!");
                }
            };
        }
        
    ])
    /*{
            //this.location="Los Angeles";
            this.locate= function locate()
            {
                if(this.location)
                {
                    //http://api.openweathermap.org/data/2.5/forecast/city?q=los+angeles&APPID=da3212ddf66fc2b87eb3cd10a539b1d6
                    //$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city.name).success(function(data, status, headers, config) {}
                    window.alert("http://api.openweathermap.org/data/2.5/forecast/city?q="+this.location.toLowerCase().replace(" ","+")+"&APPID=da3212ddf66fc2b87eb3cd10a539b1d6");

                }
                else
                {
                    window.alert("You need to enter something!");
                }
            };
        });
*/
})
(window.angular);