'use strict';

/**
 * Directive : Aspects News
 */
angular.module('aspectsWebsiteUiApp')
    .directive('aspectsNews', function () {
        return {
            restrict: 'E',
            scope: {
                news: '='
            },
            controller: ['$scope', function($scope){

            }],
            templateUrl: 'scripts/directives/components/aspectsNews/aspectsNews.html'
        }
    });