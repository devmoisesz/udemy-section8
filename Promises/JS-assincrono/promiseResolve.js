function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error)

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

function baixaPagina(){
    const emCache = false

    if(emCache){
        return Promise.resolve('Página em cache')
    } else{
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(erro => console.log(erro))