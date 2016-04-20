describe('Todos tracker', function() {
  beforeEach(function(){
    browser.get('/app');
  })

  it('has todos', function() {
    var todos = $$('#todo ul li');
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });

  it('can add a ToDo', function() {
    $('#new-todo-name').sendKeys("NewToDo");
    $('#add-todo').click();
    var todo = $$('#todo ul li').last().getText();
    expect(todo).toEqual('NewToDo: not completed');
  });

  it('can remove a ToDo', function() {
    var todos = $$('#todo ul li');
    $('#remove-todo').click();
    expect(todos.count()).toEqual(1);
  });

});
