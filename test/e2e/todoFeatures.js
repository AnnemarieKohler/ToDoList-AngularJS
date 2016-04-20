describe('Todos tracker', function() {
  it('has todos', function() {
    browser.get('/app');
    var todos = $$('#todo ul li');
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });
});
