import express from "express"; // importa o express
const app = express(); // cria uma instância do express

// Indicar a leitura de JSON
app.use(express.json());

const alunos = [
    { id: 1, nome: "Biel", idade: 96 },
    { id: 2, nome: "Vitor", idade: 17 },
    { id: 3, nome: "Oganessônio", idade: 36 },
    { id: 4, nome: "Alberto Eisteino", idade: 16 },
];

const buscarAlunoPorId = (id) => {
    return alunos.filter(aluno => aluno.id == id);
};

const buscarIndexAluno = (id) => {
    return alunos.findIndex(aluno => aluno.id == id)
}

// Rota padrão/raiz
app.get("/", (req, res) => {
    res.send("Oie");
});

app.get("/alunos", (req, res) => {
    res.status(200).send(alunos);
});


app.post("/alunos", (req, res) => {
    let data = req.body;
    alunos.push(data);
    res.status(201).send(`Aluno ${data.nome} cadastrado com sucesso`);
});

app.get("/alunos/:id", (req, res) => {
    let id = req.params.id;
    res.status(200).send(buscarAlunoPorId(id));
});

app.delete("/alunos/:id", (req, res) => {
    let id = req.params.id
    res.status(200).send(`Aluno foi excluído com sucesso.`)
    alunos.splice(buscarIndexAluno(id), 1)
})

app.put("/alunos/:id", (req, res) => {
    let index = buscarIndexAluno(req.params.id);
    
    if (index === -1) {  // Verifica se o aluno existe
        return res.status(500).send(`Id inválido`);
    }

    // Atualiza os dados do aluno
    alunos[index].nome = req.body.nome;
    alunos[index].idade = req.body.idade;

    // Envia a resposta de sucesso
    res.status(200).send(`Aluno foi modificado com sucesso.`);
})

export default app;
