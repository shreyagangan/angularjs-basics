/**
 * Created by Shreya on 6/26/2016.
 */
//Controller
(function(angular) {
    'use strict';
    angular.module('invoice3', ['finance3'])
        .controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = 'EUR';
            this.currencies = currencyConverter.currencies;

            this.total = function total(outCurr) {
                return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
            };
            this.pay = function pay() {
                window.alert("Thanks!");
            };
        }]);
})(window.angular);

/*
 (function(angular) {
 'use strict';
 angular.module('ng-app-name', ['service_module_name'])
 .controller('Controller-name', ['service_factory_name', function(service_factory_name) {
 this.qty = 1;
 this.cost = 2;
 this.inCurr = 'EUR';
 this.currencies = currencyConverter.currencies;

 this.total = function total(outCurr) {
 return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
 };
 this.pay = function pay() {
 window.alert("Thanks!");
 };
 }]);
 })(window.angular);

 */