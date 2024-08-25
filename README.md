# Estudos para a prova do thiago

## Início

### Node.js

1. Instalar o package.json

```
npm init -y
```

---

### Express

1. Instala o Express

```
npm install express --save
```

2. Cabeçalho (**app.js**)

```js
const express = require("express"); // importa o express
const app = express(); // cria uma instância do express
const port = 3000;
```

3. Criar rota padrão

```js
app.get("/", (req, res) => {
  res.send("Oie");
});
```

#### Explicação:

- req: Usuário -> Servidor
- res: Servidor -> Usuário
- send: Define o que será enviado

4. Escutar a rota

```js
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
```

5. Criar uma nova rota

```js
// mock
const alunos = [
  { id: 1, nome: "Biel", idade: 96 },
  { id: 2, nome: "Vitor", idade: 17 },
  { id: 3, nome: "Oganessônio", idade: 36 },
  { id: 4, nome: "Alberto Eisteino", idade: 16 },
];

app.get("/alunos", (req, res) => {
  res.status(200).send(alunos);
});
```

#### Explicação:

- /alunos => nova rota criada
- .status(200) => Se o status for 200, OK.
- .send(envia o vetor com os alunos)

6. Criar rota para o envio de dados

```js
app.use(express.json()) // Indica para o express ler dados em JSON
...
app.post('/alunos', (req, res) =>{
    let data = req.body
    alunos.push(data)
    res.status(201).send(`Aluno ${data.nome} cadastrado com sucesso`)
})
```

#### Explicação:

- let data = req.body => Os dados enviados pelo usuário serão armazenados na variável data.
- .push(data) => Adiciona os dados ao vetor alunos.

7. Criar função para buscar aluno por Id

```js
const buscarAlunoPorId = (id) => {
  return alunos.filter((aluno) => aluno.id == id);
};
```

#### Explicação

- .filter => faz um filtro no vetor alunos.
- aluno.id == id => Procura um aluno que possua um id igual ao parâmetro id.

8. Ver aluno por id

```js
app.get("/alunos/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).send(buscarAlunoPorId(id));
});
```

#### Explicação

- /:id => Onde será passado o parâmetro de id
- req.params.id => salva na variável o valor do id

> Para executar com o id

```js
http://localhost:3000/alunos/2 // 2 => Valor do id
```

> Resposta do Postman

```js
[
    {
        "id": 2,
        "nome": "Vitor",
        "idade": 17
    }
]
```

---

## Arrays

### Filter

### Every

### Some

### Find

### Map

### Each

## Promises

### Fetch

### Async/Await

## Try Catch

### Try e catch

```js
try {
} catch (err) {}
```

### Exceções

## Módulos

### Import

### Export
