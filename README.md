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