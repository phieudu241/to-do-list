angular.module('controllers')
    .controller('TodoController', [
        '$scope',
        function ($scope) {

            // Temporary todo list
            $scope.todos = [
                {text: 'Create to-do-list repository', done: true, selected: false},
                {text: 'Initialize app', done: true, selected: false},
                {text: 'Implement todo list', done: true, selected: false},
                {text: 'Add test cases', done: true, selected: false},
                {text: 'Submit app', done: true, selected: false},
                {text: 'Customer confirmed', done: false, selected: false}
            ];

            $scope.addTodo = function () {
                if ($scope.newTodoText && $scope.newTodoText.trim() !== '') {
                    $scope.todos.push({text: $scope.newTodoText.trim(), done: false, selected: false});
                }
            };

            $scope.deleteTodos = function () {
                $scope.todos = $scope.todos.filter(function (todo) {
                    return !todo.selected;
                });
            };

            $scope.toggleTodoStatus = function (todo) {
                todo.done = !todo.done;
            };

            $scope.toggleSelectAll = function () {
                $scope.todos.forEach(function (todo) {
                    todo.selected = $scope.checked;
                });
            };
        }]);