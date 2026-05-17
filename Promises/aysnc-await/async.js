function rand(min, max){
    min: 1000
    max: 3000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(new Error)
        setTimeout(()=> {
            resolve(msg)
    }, tempo)
    })
}

async function executa(){
    try {
        const f1 = await esperaAi('Fase 1', rand(1, 3))
        console.log(f1) 

        const f2 = await esperaAi('Fase 2', rand(1, 3))
        console.log(f2) 

        //vai causar erro por enviar um number e cair no catch 
        // e parar a execução da promise
        const f3 = await esperaAi(7 ,rand(1, 3))
        console.log(f3) 

        console.log('Terminamos na fase:', f3)
    } catch (error) {
        console.log(error)
    }
}

executa()