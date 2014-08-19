'use strict';

/**
 * Controller : News Controller
 */
angular.module('aspectsWebsiteUiApp')
    .controller('NewsController', ['$scope', 'UserFactory', function ($scope, UserFactory) {

        var userDto = {
            username: 'john'
        };
        UserFactory.addUser(userDto);

        UserFactory.getUser(1).then(function(data){
            console.log(data);
            $scope.name = data.username
        });

        $scope.newsList = [
            {
                title: 'Super news 5',
                content: '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>' +
                'Morbi molestie consectetur gravida. Proin iaculis accumsan est nec dapibus. ' +
                'Nulla elementum odio in ante suscipit vehicula. Nunc massa lorem, interdum euismod viverra vel, ' +
                'varius eu arcu. Donec dapibus, massa nec euismod pharetra, lacus ante sodales metus, ' +
                'non sollicitudin dolor lectus eget orci. Cras quam orci, tincidunt sed nisi at, vestibulum imperdiet lectus.'
            },
            {
                title: 'Super news 4',
                content: '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>' +
                'Morbi molestie consectetur gravida. Proin iaculis accumsan est nec dapibus. ' +
                'Nulla elementum odio in ante suscipit vehicula. Nunc massa lorem, interdum euismod viverra vel, ' +
                'varius eu arcu. Donec dapibus, massa nec euismod pharetra, lacus ante sodales metus, ' +
                'non sollicitudin dolor lectus eget orci. Cras quam orci, tincidunt sed nisi at, vestibulum imperdiet lectus.' +
                '<ul><li>Quid enim tam absurdum quam delectari multis</li><li>Metuentes igitur idem latrones Lycaoniam magna</li>' +
                    '<li>Equitis Romani autem esse filium criminis loco</li><li>Mox dicta finierat, multitudo omnis ad, quae</li>' +
                    '<li>Quanta autem vis amicitiae sit, ex hoc intellegi</li></ul>'
            },
            {
                title: 'Super news 3',
                content: '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>' +
                'Morbi molestie consectetur gravida. Proin iaculis accumsan est nec dapibus. ' +
                'Nulla elementum odio in ante suscipit vehicula. Nunc massa lorem, interdum euismod viverra vel, ' +
                'varius eu arcu. Donec dapibus, massa nec euismod pharetra, lacus ante sodales metus, ' +
                'non sollicitudin dolor lectus eget orci. Cras quam orci, tincidunt sed nisi at, vestibulum imperdiet lectus.'
            },
            {
                title: 'Super news 2',
                content: '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>' +
                'Morbi molestie consectetur gravida. Proin iaculis accumsan est nec dapibus. ' +
                'Nulla elementum odio in ante suscipit vehicula. Nunc massa lorem, interdum euismod viverra vel, ' +
                'varius eu arcu. Donec dapibus, massa nec euismod pharetra, lacus ante sodales metus, ' +
                'non sollicitudin dolor lectus eget orci. Cras quam orci, tincidunt sed nisi at, vestibulum imperdiet lectus.'
            },
            {
                title: 'Super news 1',
                content: '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>' +
                'Morbi molestie consectetur gravida. Proin iaculis accumsan est nec dapibus. ' +
                'Nulla elementum odio in ante suscipit vehicula. Nunc massa lorem, interdum euismod viverra vel, ' +
                'varius eu arcu. Donec dapibus, massa nec euismod pharetra, lacus ante sodales metus, ' +
                'non sollicitudin dolor lectus eget orci. Cras quam orci, tincidunt sed nisi at, vestibulum imperdiet lectus.'
            }
        ]

    }]);