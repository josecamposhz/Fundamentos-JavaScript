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


const crearLista = (pokemones) => {
  // Creamos el <ol>
  const lista = document.getElementById("lista-pokemones");
  pokemones.forEach(pokemon => {
    lista.appendChild(crearItem(pokemon));
  });
}

const crearItem = (pokemon) => {
  // Creamos el <li>
  const li = document.createElement("li");
  li.classList.add("p-2");
  // Agregamos texto al <li>
  li.textContent = pokemon.name;
  li.appendChild(crearBoton(pokemon.url));
  // Retornamos el elemento <li>
  return li;
}

const crearBoton = (url) => {
  const button = document.createElement("button");
  button.textContent = "Ver Pokemon";
  button.classList.add("btn");
  button.classList.add("btn-info");
  button.classList.add("ml-2");
  button.addEventListener('click', () => {
    getPokemon(url);
  })

  return button;
}

const crearPokemonCard = (name, stats, imageSrc) => {
  const pokemonCard = document.getElementById("pokemon-card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardBody.appendChild(crearCardTitle(name));
  
  const dFlex = document.createElement("div");
  dFlex.classList.add("d-flex");
  dFlex.classList.add("align-items-center");
  dFlex.appendChild(crearCardImage(name, imageSrc));
  dFlex.appendChild(crearCardStats(stats));
  cardBody.appendChild(dFlex);

  let countChild = pokemonCard.childElementCount;
  while (countChild > 0)
  {
    pokemonCard.removeChild(pokemonCard.childNodes[countChild - 1]);
    countChild = pokemonCard.childElementCount;
  }
  pokemonCard.appendChild(cardBody);
}

const crearCardTitle = (name) => {
  const cardTitle = document.createElement("h1");
  cardTitle.classList.add("text-center");
  cardTitle.textContent = name;
  return cardTitle;
}

const crearCardImage = (name, imageSrc) => {
  const cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("col-md-6");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = imageSrc;
  cardImage.alt = name;

  cardImageContainer.appendChild(cardImage);
  return cardImageContainer;
}

const crearCardStats = (stats) => {
  const cardStatsContainer = document.createElement("div");
  cardStatsContainer.classList.add("col-md-6");

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");
  
  stats.forEach(stat => {
    cardText.appendChild(crearStatText(stat));
  });

  cardStatsContainer.appendChild(cardText);
  return cardStatsContainer;
}

const crearStatText = (stat) => {
  const h4 = document.createElement("h4");

  const strong = document.createElement("strong");
  strong.textContent = `${stat.name}: `;
  
  const span = document.createElement("span");
  span.textContent = stat.base_stat;

  h4.appendChild(strong);
  h4.appendChild(span);
  return h4;
}