describe('unit: TodoController', function () {

    var ctrl;
    var scope;

    // get a reference to the module
    beforeEach(module('TodoApp'));

    /*
     use the $controller service to get a reference to the TodoController.
     inject the $rootScope to create a new scope that we can use in our controller.
     create a dummy task that we can use to test.
     */
    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();
        ctrl = $controller('TodoController', {$scope: scope});

        // every time the scope calls the $emit method
        spyOn(scope, '$emit');

    }));

    it('should init a list of todos', function () {
        expect(scope.todos).toBeDefined();
    });

    it('should add a new todo to the todos array', function () {
        var currentTodosLength = scope.todos.length;
        scope.newTodoText = 'new todo';
        scope.addTodo();

        expect(scope.todos.length).toEqual(currentTodosLength + 1);
    });

    it('should remove all todos from the todos array', function () {
        scope.todos.forEach(function (todo) {
            todo.selected = true;
        });

        scope.deleteTodos();

        expect(scope.todos.length).toEqual(0);
    });
});