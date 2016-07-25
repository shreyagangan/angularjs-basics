/**
 * Created by Shreya on 6/27/2016.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function($scope) {
    $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
        {"name":"jalapeno", "spiciness":"hot hot hot!"},
        {"name":"habanero", "spiciness":"LAVA HOT!!"}];
    $scope.spice = "habanero";
});

describe('myController function', function() {

    describe('myController', function() {
        var $scope;

        beforeEach(module('myApp'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('MyController', {$scope: $scope});
        }));

        it('should create "spices" model with 3 spices', function() {
            expect($scope.spices.length).toBe(3);
        });

        it('should set the default value of spice', function() {
            expect($scope.spice).toBe('habanero');
        });
    });
});


describe('state', function() {
    var mainScope, childScope, grandChildScope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
        mainScope = $rootScope.$new();
        $controller('MainController', {$scope: mainScope});
        childScope = mainScope.$new();
        $controller('ChildController', {$scope: childScope});
        grandChildScope = childScope.$new();
        $controller('GrandChildController', {$scope: grandChildScope});
    }));

    it('should have over and selected', function() {
        expect(mainScope.timeOfDay).toBe('morning');
        expect(mainScope.name).toBe('Nikki');
        expect(childScope.timeOfDay).toBe('morning');
        expect(childScope.name).toBe('Mattie');
        expect(grandChildScope.timeOfDay).toBe('evening');
        expect(grandChildScope.name).toBe('Gingerbread Baby');
    });
});