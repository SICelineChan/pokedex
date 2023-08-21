async function fetchPokeInfo() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokeInfo = await response.json();
    console.log(pokeInfo);
  }

  export default {
    fetchPokeInfo
  }