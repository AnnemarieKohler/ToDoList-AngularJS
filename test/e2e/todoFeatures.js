describe('Todos tracker', function() {
  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
        method: 'GET'
      },
      response: {
        data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
      }
    }]);
    browser.get('/');
  });

  it('has todos', function() {
    var todos = $$('#todo ul li');
    expect(todos.first().getText()).toMatch('ToDo1: completed');
    expect(todos.last().getText()).toMatch('ToDo2: not completed');
  });

  it('can add a ToDo', function() {
    $('#new-todo-name').sendKeys("NewToDo");
    $('#add-todo').click();
    var todo = $$('#todo ul li').last().getText();
    expect(todo).toMatch('NewToDo: not completed');
  });

  it('can remove a ToDo', function() {
    var todos = $$('#todo ul li');
    $('#remove-todo').click();
    expect(todos.count()).toEqual(1);
  });

  it('can mark a ToDo as complete', function(){
    var todo = $$('#todo ul li').last();
    todo.element(by.css('.status')).click();
    expect(todo.getText()).toMatch("ToDo2: completed");
  });

  afterEach(function(){
    mock.teardown();
  });

});
