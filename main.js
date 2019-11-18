class List {
  constructor(){
    this.data = [];    
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    // acessa o contructor da classe pai
    super();

    this.usuario = 'Julio Azevedo'
  }

  exibeUsuario() {
    console.log(this.usuario);
  }
}

// instanciar a classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo todo');
}

MinhaLista.exibeUsuario();