// const fetcher = (index) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
//     .then(res => {
//         return res.json()
//     }).then(res2 => {
//         console.log(res2);
//     }).catch(err => console.log(err))
// }
// fetcher(1)

//change a fetch and .then / catch to a asynchronous function
const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    const pokemonData = await response.json();
    console.log(pokemonData);
    const title = document.getElementById('pokemonName');
    title.textContent = pokemonData.name;
    const pokeImage = document.getElementById('pokeImage');
    pokeImage.src = pokemonData.sprites.front_default;
    const pokeImageBack = document.getElementById('pokeImageBack');
    pokeImageBack.src = pokemonData.sprites.back_default;
    const pokeList = document.getElementById('list')
    pokeList.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(pokemonData.moves[i].move.name);
        li.appendChild(text);
        pokeList.appendChild(li);
    }
}

fetchPokemon(1).catch(err => console.log(err))

let index = 1;
const button = document.getElementById('nextPokemon');
button.addEventListener('click', () => {
    index ++;
    fetchPokemon(index).catch(err => {
        console.log(err)
        // index = 0;
    })
})
