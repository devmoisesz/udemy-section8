function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error)
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com o Banco de dados', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados do banco', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(12, rand(1, 3))
    })
    .then(resposta =>{
        console.log(resposta)
    })
    .catch(error => {
        console.log(error)
    })