class TodoList {
  constructor(){
    this.todos = [];
  }

  static addTodo(){
    // o método não enxerga o 'this.todos' que está no construtor
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

TodoList.addTodo();