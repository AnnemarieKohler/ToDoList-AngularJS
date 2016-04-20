toDoApp.controller('ToDoController', function() {
  var self = this;
  self.todos = [
    {text: "ToDo1", status: true},
    {text: "ToDo2", status: false}
  ];

  self.addToDo = function(todoText) {
    self.todos.push({text: todoText, status: false});
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

});
