toDoApp.factory('ToDoFactory', function() {
  var ToDo = function(text, status){
    this.text = text;
    this.status = (typeof status !== 'undefined') ? status : false;
  };

  ToDo.prototype.complete = function() {
    this.status = true;
  };

  return ToDo;
});
