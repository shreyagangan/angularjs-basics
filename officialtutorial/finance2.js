/**
 * Created by Shreya on 6/26/2016.
 */
//Service!!!
(function(angular) {
    'use strict';
    angular.module('finance2', [])
        .factory('currencyConverter', function() {
            var currencies = ['USD', 'EUR', 'CNY'];
            var usdToForeignRates = {
                USD: 1,
                EUR: 0.74,
                CNY: 6.09
            };
            var convert = function (amount, inCurr, outCurr) {
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            };

            return {
                currencies: currencies,
                convert: convert
            };
        });
})(window.angular);