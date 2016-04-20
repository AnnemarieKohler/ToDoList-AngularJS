toDoApp.factory('ToDoFactory', function() {
  var ToDo = function(text, status){
    this.text = text;
    this.status = (typeof status !== 'undefined') ? status : false;
  };

  ToDo.prototype.isComplete = function() {
    this.status = !this.status;
  };

  return ToDo;
});
