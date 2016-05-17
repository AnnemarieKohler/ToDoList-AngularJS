toDoApp.factory('ToDoFactory', function() {
  function ToDo(text, status){
    this.text = text;
    this.status = (typeof status !== 'undefined') ? status : false;
  };

  ToDo.prototype.isComplete = function() {
    this.status = !this.status;
  };

  return ToDo;
});
