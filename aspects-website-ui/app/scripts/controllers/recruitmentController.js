'use strict';

/**
 * Controller : Recruitment Controller
 */
angular.module('aspectsWebsiteUiApp')
    .controller('RecruitmentController', ['$scope', function ($scope) {

        $scope.recruitmentList = [
            {
                class: 'Warrior',
                spec: 'Tank',
                needed: 'High'
            },
            {
                class: 'Rogue',
                spec: 'Dps',
                needed: 'High'
            },
            {
                class: 'Hunter',
                spec: 'Dps',
                needed: 'Medium'
            },
            {
                class: 'Paladin',
                spec: 'Heal',
                needed: 'High'
            },
            {
                class: 'Mage',
                spec: 'Dps',
                needed: 'Low'
            },
            {
                class: 'Warlock',
                spec: 'Dps',
                needed: 'High'
            },
            {
                class: 'Shaman',
                spec: 'Heal',
                needed: 'Low'
            }
        ]

    }]);