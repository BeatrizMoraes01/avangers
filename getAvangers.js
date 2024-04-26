const endpoint = "https://gateway.marvel.com:443/v1/public/characters/1009165/events?&limit=100&ts=1&apikey=b10be7d65b4da498ff77cdb46a4f58bb&hash=74bbd281f02caeba5eeb95f00e5dbf92"

const listaHeros = document.querySelector("[data-lista]")

async function getComics() {
    const conexao = await fetch(endpoint);
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    const resultado = await conexaoConvertida.data.results;
    console.log(resultado);
    resultado.forEach(element => {
        const title = element.title;
        const thumbnail = element.thumbnail.path + "." + element.thumbnail.extension;
        const description = element.description;

        criarHTML(title,thumbnail,description);
    });
    return resultado
}

getComics();



function criarHTML (title, thumbnail, description) {
    const hero = document.createElement("li");
    hero.className = "item-hero";
    hero.innerHTML = `
    <h1 class="name-hero">${title}</h1>
    <img class="img-hero" src="${thumbnail}" alt="Homem de Ferro HQ">
    <p class="descricao-hero">${description}</p>
    `
    listaHeros.appendChild(hero);
}
