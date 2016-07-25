/**
 * Created by Shreya on 6/26/2016.
 */
var spicyApp= angular.module('spicyApp',[]);
spicyApp.controller('spicyController',['$scope', function($scope){
    $scope.spice="very";
    $scope.chiliSpicy=function(){
        $scope.spice="chili";
    };
    $scope.jalapenoSpicy=function(){
        $scope.spice="jalapeno";
    };
}]);

spicyApp.controller('ArgumentSpicyController',['$scope', function($scope){
    $scope.customSpice="wasabi";
    $scope.spice="very";
    $scope.spicy=function(spice){
        $scope.spice=spice;
    };

}]);