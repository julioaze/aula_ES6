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


## Const e Let ##

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
```


## Operações com Vetores (Array) ##

Na forma tradicional, para se manipular um array era preciso utilizar o método `for` para percorrer um array e assim manipular seu conteúdo.

Com a chegada do ES6 é possível percorrer, manipular, filtrar, encontrar valores, enfim, tudo de forma muito prática e menos verbosa.

**Map**
Percorre o vetor e retorna uma nova informação de dentro dele.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function(item) {
  return item * 2;
});

console.log(newArr);
```

Além do valor (item) a função também pode receber o index do elemento dentro do array

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);
```


**Reduce**

Consumir todo o vetor e tranformar em uma única informação, geralmente um número. Como parametros a função recebe o `total` e o próximo valor `next`. Cada vez que a função for executada ela vai pegar o valor do retorno e 'jogar' no total da próxima vez que a função for executada.

```javascript
const arr = [1, 3, 5, 7, 9];


const soma = arr.reduce(function(total, next) {
  return total + next;
});

console.log(soma);

// na primeira vez
// total = 0
// next = 1
// na segunda vez
// total = 1
// next = 3
// na terceira vez
// total = 4
// next = 5
```


**Filter**

Suponha que você queria retornar todos os números pares do array. Retorna `true` caso queria que o item seja mantido no array ou `false` caso ele deva ser descartado. A função `filter` a exemplo da função map, também recebe cada item do vetor.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filter = arr.filter(function(item) {
  // sempre vai retornar um boleano, pois estamos fazendo uma comparação
  return item % 2 === 0;

});

console.log(filter);
```


**Find**

Utilizado quando precisamos verificar se uma informação existe dentro do vetor. A função também recebe cada item como parâmetro e retorna sempre um valor boleano.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);

```



## Arrow function ##

Essa é umas das funcionalidades mais legais e mais utilizadas do ES6

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item) {
  return item * 2;
});

console.log(newArr);

```

A função de retorno dentro do map não tem um nome definido, por exemplo `function soma`. Então ela é considerada uma função anonima. Esse é o melhor local pra se usar as `arrow functions`. 

- Passo 1 : Remover a keyword `function`
- Passo 2 : Após o parentese que recebe o parâmetro da função, incluir os sinais de `=` e `>`, simbolizando dessa forma, uma flecha (arrow).

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item) => {
  return item * 2;
});

console.log(newArr);

```

- Passo 3 : Se a função receber apenas um parâmetro, podemos remover o parêntese que envolve o parâmetro

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => {
  return item * 2;
});

console.log(newArr);

```


- Passo 4 : Se o retorno da função é somente uma informação simples, sem vários retornos, podemos retornar a ação diretamente.

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item * 2);

console.log(newArr);

```

Também é possível criar funções utilizando constantes:

```javascript

function teste() {
  // corpo da função
};

// pode ser escrito
const teste = () => {
  // corpo da função
  return 'teste';
}

const teste2 = () => 'Teste';

console.log(teste());
```

Porém o método acima não é recomendado pelo ES6, embora funcione.

Vimos que é possível retornar qualquer coisa diretamente na função, porém o mesmo não vale para objetos:

```javascript
const teste = () => { nome: 'Julio'};
// retornara undefined pois as chaves fazer parte do corpo de uma função
```

Neste caso, basta colocar um parêntese por volta do objeto:

```javascript
const teste = () => ({ nome: 'Julio'});
```