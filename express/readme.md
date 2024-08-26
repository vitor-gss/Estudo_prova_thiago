# Node.js

1. Instalar o package.json

```
npm init -y
```

# Express

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

## Criar rota GET

3. Criar rota padrão

```js
app.get("/", (req, res) => {
  res.send("Oie");
});
```

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

- /alunos => nova rota criada
- .status(200) => Se o status for 200, OK.
- .send(envia o vetor com os alunos)

## Criar rota POST

1. Criar rota para o envio de dados

```js
app.use(express.json()) // Indica para o express ler dados em JSON
...
app.post('/alunos', (req, res) =>{
    let data = req.body
    alunos.push(data)
    res.status(201).send(`Aluno ${data.nome} cadastrado com sucesso`)
})
```

- let data = req.body => Os dados enviados pelo usuário serão armazenados na variável data.
- .push(data) => Adiciona os dados ao vetor alunos.

2. Criar função para buscar aluno por Id

```js
const buscarAlunoPorId = (id) => {
  return alunos.filter((aluno) => aluno.id == id);
};
```

- .filter => faz um filtro no vetor alunos.
- aluno.id == id => Procura um aluno que possua um id igual ao parâmetro id.

3. Ver aluno por id

```js
app.get("/alunos/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).send(buscarAlunoPorId(id));
});
```

- /:id => Onde será passado o parâmetro de id
- req.params.id => salva na variável o valor do id

### Para executar com o id

```js
http://localhost:3000/alunos/2
```
- 2 => Valor do id

### Resposta do Postman

```js
[
  {
    id: 2,
    nome: "Vitor",
    idade: 17,
  },
];
```

## Criar rota DELETE

1. Criar função que busca a posição de um aluno no array com base no id

```js
const buscarIndexAluno = (id) => {
  return alunos.findIndex((aluno) => aluno.id == id);
};
```

- findIndex => Busca a posição do aluno pelo id

2. Criar rota que delete aluno por id

```js
app.delete("/alunos/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).send(`Aluno foi excluído com sucesso.`);
  alunos.splice(buscarIndexAluno(id), 1);
});
```

- .splice() => Retira elementos do vetor com base no índice
  - buscarIndexAluno(id) => Retorna o índice do aluno com base no id
  - 1 => Diz quantos elementos a partir do índice serão removidos

## Criar rota PUT

1. Criar rota que modifique aluno por id

```js
app.put("/alunos/:id", (req, res) => {
  let index = buscarIndexAluno(req.params.id);

  if (index === -1) {
    // Verifica se o aluno existe
    return res.status(500).send(`Id inválido`);
  }

  // Atualiza os dados do aluno
  alunos[index].nome = req.body.nome;
  alunos[index].idade = req.body.idade;

  // Envia a resposta de sucesso
  res.status(200).send(`Aluno foi modificado com sucesso.`);
});
```
