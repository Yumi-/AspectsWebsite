'use strict';

/**
 * Directive : Aspects Recruitment
 */
angular.module('aspectsWebsiteUiApp')
    .directive('aspectsRecruitment', function () {
        return {
            restrict: 'E',
            scope: {

            },
            controller: ['$scope', function($scope){

            }],
            templateUrl: 'scripts/directives/components/aspectsRecruitment/aspectsRecruitment.html'
        }
    });