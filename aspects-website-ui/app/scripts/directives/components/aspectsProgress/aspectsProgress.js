'use strict';

/**
 * Directive : Aspects Progress
 */
angular.module('aspectsWebsiteUiApp')
    .directive('aspectsProgress', function () {
        return {
            restrict: 'E',
            scope: {

            },
            controller: ['$scope', function($scope){

            }],
            templateUrl: 'scripts/directives/components/aspectsProgress/aspectsProgress.html'
        }
    });