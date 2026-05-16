
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el){
    const href = el.getAttribute('href');
    try {
        const response = await fetch(href);
        const html = await response.text();
        if(response.status !== 200) throw new Error("ERRO 404");
        loadResult(html)
    } catch (error) {
        console.log(error)
    }



    /*fetch(href)
        .then(response => {
            if(response.status !== 200) throw new Error("ERRO 404");
            return response.text();
        })
        .then(html => loadResult(html))
        .catch(e => console.log(e));*/
}

function loadResult(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}