# JavaScript ES6 (ECMAScript 2015) +

- Versão mais moderna que muda a forma de escrita deixando mais robusta
- Conjunto de regras do JavaScript
- Está sendo atualizado muitas vezes pois a linguagem está em alta
- Introduzido o Babel
  - Tradutor do JS para que os navegadores entendam as novas funcionalidades
    pois eles demoram para serem atualizados
  - O Babel `transpila` o código
  - Acesso a classes de forma nativa
  - O Babel transformam as classes em funções para que os navegadores entendam
- Introduzido o WebPack: especie de live reload, um tipo de servidor de desenvolvimento
- Funções anônimas: arrow funcition ->
- Desestruturação: forma de recuperar propriedades de forma simples
- Rest/Spred: manipular arrays (duplicar conteúdo, passar de um array para outro)
- Import/Export (top 10): exporta e importa funcionalidades de um arquivo para outro
- ES8: Async/Await (top 10): programação asíncrona


## Iniciando
- Instalar o NodeJS
- Instalar o Yarn : gerenciador de pacotes do JS


## Configurando o Babel
- Executar o comando `yarn init` na raiz do projeto
- `Enter` para todas as perguntas
- O arquivo armazena as dependências da nossa aplicação
- Instalar a primeira dependência: `yarn add @babel/cli`
  - Interface de linha de comando do Babel
- Instalar a segunda dependência: `yarn add @babel/preset-env`
  - Identifica o ambiente que estamos trabalhando (navegador, no nosso caso)
- Instalar a terceira dependência: `yarn add @babel/core`
  - É o núcleo do Babel

* Checar a estrutura de arquivos criada
* Se for usar controle de versão (como o git), essa é um boa para criar o `.gitignore`
  e incluir a pasta node_modules

**Configurar o Babel: `.babelrc`**

```javascript
{
  "presets": ["@babel/preset-env"]
}
```


## Criar mais arquivos para o primeiro teste
**index.html**

**main.js**

```javascript
alert('teste');
```

## Configurar o package.json

```json
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js"
  }
```


Executar o comando `yarn dev`

**Alterar o arquivo `main.js`**
```javascript
alert('teste');
```


**Alterar o arquivo `package.json` para que o babel monitore as alterações

```json
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
```


Alterar o arquivo `index.html` com uma estrutura padrão e incluir o script `bundle.js`



## Classes ##

**main.js**
```javascript
class TodoList {
  // primeiro método que é chamado numa classe
  // executa ações assim que o objeto é criado ou
  // iniciar variáveis
  constructor(){
    this.todos = [];
  }

  // os métodos tem sintaxe mais simples em relação as funções
  addTodo() {
    // aqui é possível acessar o this
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

// instanciar a classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.addTodo();
}
```

### Herança ###

**main.js**
```javascript
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
  // classe vazia pois ela herdou os métodos da classe List
}

// instanciar a classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo todo');
}
```

### Acessar construtor da classe pai ###

Quando precisamos iniciar algo na classe atual não podemos sobrescrever o constructor da classe pai

**main.js**

```javascript
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
    // acessa o contructor da classe pai e o mantém
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
```

**Métodos Estáticos**

Não precisamos usar a palavra reservada `New` para chamar os métodos dela
O método estático não enxerga o resto da classe

**main.js**
```javascript
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
```

```
bundle.js:22 Uncaught TypeError: Cannot read property 'push' of undefined
    at Function.addTodo (bundle.js:22)
    at bundle.js:30
```

O método estático recebe uma informação e retorna outra informação, independente do resto da classe.
Normalmente quando um método estático é declarado, não há o métdo `constructor`. Esse método é apenas um auxiliar.
Neste caso não precisamos instanciar uma nova classe e ele também não depende de nenhum outro método para ser executado.

**exemplo**
```javascript
class Matematica() {
  static soma(a, b){
    return a + b;
  }
}

console.log(Matematica.soma(4, 10));
```


## Cont e Let ##

Constantes e variáveis de escopo

keyword tradicional é `var`

Duas novas keywords: `const` e `let`

Uma `constante` não pode ter o seu valor reatribuído, ou seja, ela é do tipo read only (somente leitura)

**exemplo**
```javascript
// o exemplo retornará um erro, pois não se pode reatribuir um valor a uma constante
const numero = 1;

numero = 3;
```

Entretanto a constante pode sofre mutação. O formato do objeto não muda, mas podemos alterar o seu valor.

```javascript
const usuario = {nome: 'Julio'};

usuario.nome = 'Alessandra';
```

**Variáveis de escopo**

A variável de escopo `let` é visivel somente dentro do escopo onde ela está contida. Escopo é o corpo de uma função ou método, cercado por chaves `{}`

```javascript
function teste(x){
  let y = 2;

  if(x > 5) {
    let y = 4;

    console.log(x, y);
  }
}
teste(10);

// o console abaixo exibiria um erro, pois a variável Y somente é visivel dentro do escopo da função teste
console.log(y);