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
    expect(ctrl.todo).toEqual(displayText);
  });
});
