'use strict';

angular.module('trabalhoemdupla').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});