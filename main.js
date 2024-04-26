const endpoint = "http://gateway.marvel.com/v1/public/characters/1009165/events&ts=1&apikey=b10be7d65b4da498ff77cdb46a4f58bb&hash=74bbd281f02caeba5eeb95f00e5dbf92"

async function getComics() {
    const conexao = await fetch(endpoint);
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida
}

getComics();