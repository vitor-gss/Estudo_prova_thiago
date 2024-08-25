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
    return alunos.filter((aluno) => aluno.id == id);
};

// Rota padrão/raiz
app.get("/", (req, res) => {
    res.send("Oie");
});

app.get("/alunos", (req, res) => {
    res.status(200).send(alunos);
});

app.get("/alunos/:id", (req, res) => {
    let id = req.params.id;
    res.status(200).send(buscarAlunoPorId(id));
});

app.post("/alunos", (req, res) => {
    let data = req.body;
    alunos.push(data);
    res.status(201).send(`Aluno ${data.nome} cadastrado com sucesso`);
});

export default app;
