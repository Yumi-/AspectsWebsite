'use strict';

/**
 * Controller : Progress Controller
 */
angular.module('aspectsWebsiteUiApp')
    .controller('ProgressController', ['$scope', function ($scope) {

        $scope.progressList = [
            {
                name: 'SoO',
                downs: '14',
                total: '14',
                mode: 'HM'
            },
            {
                name: 'ToT',
                downs: '13',
                total: '13',
                mode: 'HM'
            }
        ]

    }]);