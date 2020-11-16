const apiURL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemones = async () => {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    pokemones = data.results;
    crearLista(pokemones);
  } catch (error) {
    console.log(error);
  }
};

const getPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    const { name } = data;
    const { front_default } = data.sprites;
    const stats = data.stats.map(stat => {
      return {
        name: stat.stat.name,
        base_stat: stat.base_stat
      }
    });
    crearPokemonCard(name, stats, front_default);
  } catch (error) {
    console.log(error);
  }
};

getPokemones();

// innerHTML y Template String

const crearLista = (pokemones) => {
  document.getElementById("lista-pokemones").innerHTML = pokemones.map(pokemon => `
  <li class="mb-2">${pokemon.name} <button class="btn btn-info ml-2" onclick="getPokemon('${pokemon.url.toString()}');">Ver Pokemon</button></li>`).join('');
}

const crearPokemonCard = (name, stats, imageSrc) => {
  document.getElementById("pokemon-card").innerHTML = `
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h1 class="text-center">${name}</h1>
          <div class="d-flex align-items-center">
            <div class="col-md-6">
              <img class="card-img-top" src="${imageSrc}" alt="${name}" style="max-height: 200px; max-width: 200px;">
            </div>
            <div class="col-md-6">
              <div class="card-text">
              ${ stats.map(stat => `<h4><strong>${stat.name}: </strong><span>${stat.base_stat}</span>`).join('') }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}