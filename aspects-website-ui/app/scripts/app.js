'use strict';

/**
 * Main module of the application.
 */
var app = angular.module('aspectsWebsiteUiApp', [ 'ui.router', 'ngResource' ]);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

app.config([ '$urlRouterProvider', '$stateProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',

    function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home/home.html'
            })
            .state('test1', {
                url: '/test1',
                templateUrl: 'views/videos/videos.html'
            })
            .state('test2', {
                url: '/test2',
                templateUrl: 'views/roster/roster.html'
            })

    } ]);
