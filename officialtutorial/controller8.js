/**
 * Created by Shreya on 6/27/2016.
 */

/*
angular.module().controller().factory()
module('ModuleName',[argumentlist])
controller('ControllerName',[argumentlist])
factory('serviceName',[argumentlist])

controller('ControllerName',['$scope','serviceName',function($scope, serviceName)])
factory('serviceName',['$servicename',function(arg)])
*/
(function (angular) {
'use strict';
    angular.module('myServiceModule',[])
        .controller('MyController',['$scope', 'notify', function($scope,notify){
            $scope.callNotify=function(msg){
                notify(msg);
            }
        }])
        .factory('notify',['$window',function(win){
            var msgs=[];
            return function(msg)
            {
                msgs.push(msg);
                if(msgs.length==3)
                {
                    win.alert(msgs.join("\n"));
                    msgs=[];
                }
            };
        }]);
})(window.angular);