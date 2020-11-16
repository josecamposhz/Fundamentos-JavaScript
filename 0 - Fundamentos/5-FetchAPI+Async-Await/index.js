const apiURL = 'https://pokeapi.co/api/v2/pokemon'; // URL API

// Fecth API => 
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API
/* fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// async - await
const getPokemones = async () => {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data.results)
    // pokemones = data.results.map(pokemon => pokemon.name);
    // pokemones = data.results.filter((pokemon) => pokemon.name[0] === "c");
    // Mapeanos el arreglo y retornamos los pokemones que solo comiencen con la letra C
    /* pokemones = data.results
      .map((poke) => poke.name)
      .filter((name) => name[0] === "c"); */
  } catch (error) {
    console.log(error);
  }
};

getPokemones();
