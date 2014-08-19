'use strict';

/**
 * WS Config Factory
 */
angular.module('aspectsWebsiteUiApp').factory('WSConfigFactory', function () {
    var url = 'http://localhost:8080/';

    var factory = {
        getUserPath: url+'rest/user/get/',
        addUserPath: url+'rest/user/add'
    };
    return factory;
});

/**
 * User Factory
 */
angular.module('aspectsWebsiteUiApp')
    .factory('UserFactory', ['$http', '$q', 'WSConfigFactory', function ($http, $q, WSConfigFactory) {
    var factory = {
        getUser: function (userId) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: WSConfigFactory.getUserPath + userId
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        addUser: function(userDto){
            $http({
                method: 'PUT',
                url: WSConfigFactory.addUserPath,
                data: userDto
            }).success(function (data) {
                console.log('success');
            }).error(function (data) {
                console.log('error');
            });
        }
    };
    return factory;
}]);