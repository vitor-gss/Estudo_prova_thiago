// Criar promessa
/*
const myPromise = new Promise((resolve, reject) => {
    const nome = "Vitin"

    if (nome === "Vitin") {
        resolve("Usuário Vitin encontrado")
    } else {
        reject("Usuário não encontrado")
    }
})

// Reject - Erro
// Resolve - Se deu certo

myPromise.then(data => {
    console.log(data);
}).then()

//------- Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Vitin"

    if (nome === "Vitin") {
        resolve("Usuário Vitin encontrado")
    } else {
        reject("Usuário não encontrado")
    }
})

myPromise2.then(data => {
    return data.toLowerCase()
}).then(stringModificada => {
    console.log(stringModificada);
})

// Reject
const myPromise3 = new Promise((resolve, reject) => {
    const nome = "João"

    if (nome === "Vitin") {
        resolve("Usuário Vitin encontrado")
    } else {
        reject("Usuário não encontrado")
    }
})

myPromise3.then(data => {
    console.log(data);
}).catch(err => {
    console.log(`Erro: ${err}`);
})

// Resolver várias promessas
const p1 = new Promise((resolve, reject) => {
    resolve("p1 ok");
})
const p2 = new Promise((resolve, reject) => {
    resolve("p2 ok");
})
const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok");
})

const resolverTodas = Promise.all([p1, p2, p3]).then(data => { 
    console.log(data);
})
*/
// Fetch
const usuarioGithub = "vitor-gss"

fetch(`https://api.github.com/users/${usuarioGithub}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
}).then(response => {
    console.log(typeof response);
    console.log(response);
    return response.json()
}).then(data => {
    console.log(data);
})