describe('ToDoFactory', function() {
  beforeEach(module('toDoApp'));

  var toDo;

  beforeEach(inject(function(ToDoFactory) {
    toDo = new ToDoFactory('New ToDo');
  }));

  it('is incomplete by default', function(){
    expect(toDo.status).toBe(false);
  });

  it('can be marked as complete', function() {
    toDo.complete();
    expect(toDo.status).toBe(true);
  });
});
