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

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1 ,5))
]

Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(error){
        console.log(error)
    })