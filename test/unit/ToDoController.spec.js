describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with two toDos', function() {
    var displayText = [
      {text: "ToDo1", status: true},
      {text: "ToDo2", status: false}
    ];
    expect(ctrl.todos).toEqual(displayText);
  });

  it('adds a new todo', function() {
    ctrl.addToDo("Wash the car");
    var todo = {text: "Wash the car", status: false};
    expect(ctrl.todos.pop()).toEqual(todo);
  });

  it('removes last todo', function() {
    var intitialCount = ctrl.todos.length;
    ctrl.removeToDo();
    expect(ctrl.todos.length).toEqual(intitialCount - 1);
  });

});
