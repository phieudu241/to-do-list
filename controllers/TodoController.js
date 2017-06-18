angular.module('controllers')
    .controller('TodoController', [
        '$scope',
        function ($scope) {
            $scope.message = 'hello';
        }]);