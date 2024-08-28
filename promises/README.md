# Promises

São como promessas na vida real, espera um retorno

## Criar promise

```js
// Cria a promessa
const myPromise = new Promise((resolve, reject) => {
  const nome = "Vitin";

  if (nome === "Vitin") {
    resolve("Usuário Vitin encontrado");
  } else {
    reject("Usuário não encontrado");
  }
});
```

- **Resolve:** Se deu tudo certo
- **Reject:** Se algo deu errado


## Mostrar o resultado

```js
myPromise.then((data) => {
  console.log(data);
});
```

- **then:** Utilizado para lidar com o resultado de uma Promise.
  > O then permite que seja definida uma função que será executada quando a Promise for resolvida com sucesso.

## Encadeamento de then's

```js
myPromise2
  .then((data) => {
    return data.toLowerCase(); // Trata o dado recebido, transformando-o apenas em letras minúsculas.
  })
  .then((stringModificada) => { // stringModificada recebe o valor do then anterior
    console.log(stringModificada); // Mostra o dado tratado
  });
```

## Mostrar resultado do reject
```js
myPromise3.then(data => {
    console.log(data);
}).catch(err => { // Recebe como parâmetro o valor digitado no reject
    console.log(`Erro: ${err}`);
})
```

## Resolver várias promessas
```js
const p1 = new Promise((resolve, reject) => {
    resolve("p1 ok");
})
const p2 = new Promise((resolve, reject) => {
    resolve("p2 ok");
})
const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok");
})

// passa todas as promises a serem resolvidas e o que vai acontecer com esse dado.
const resolverTodas = Promise.all([p1, p2, p3]).then(data => { 
    console.log(data);
})
```

## Fetch
```js
const usuarioGithub = "vitor-gss"

fetch(`https://api.github.com/users/${usuarioGithub}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})
```
A função fetch faz uma requisição HTTP para o URL.
> Neste caso, a URL é https://api.github.com/users/vitor-gss, que é o endpoint da API do GitHub para obter informações sobre o usuário "vitor-gss".

Método GET: O método de requisição é GET, que é o padrão do fetch e é usado para obter dados.

Cabeçalho headers: Aqui, define-se um cabeçalho na requisição. Esse cabeçalho especifica que você deseja receber a resposta no formato da versão 3 da API do GitHub.

### 1º then
```js
.then(response => {
    console.log(typeof response);
    console.log(response);
    return response.json()
}).
```
Após a fetch fazer a requisição, ela retorna uma Promise que será resolvida com o objeto Response.

Primeiro then:

* response é o objeto que representa a resposta HTTP.
* console.log(typeof response);: Isso exibe o tipo do objeto response, que será "object".
* console.log(response);: Isso exibe o objeto response completo, que contém informações sobre a resposta, como status da requisição, cabeçalhos, etc.
* return response.json(): O método json() extrai os dados JSON do corpo da resposta e retorna outra Promise. Isso permite que os dados JSON sejam manipulados no próximo then.

### 2º Then
```js
.then(data => {
    console.log(data);
})
```
* Este then é chamado após a Promise retornada por response.json() ser resolvida.
* data: Aqui, data contém o JSON com as informações sobre o usuário do GitHub (por exemplo, nome de usuário, bio, número de repositórios, etc.).
* console.log(data);: Isso exibe o conteúdo JSON da resposta no console.
