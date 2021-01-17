const pokemonListTitle = "Pokemon list";

export const routes = {
    root: {path: "/", title: pokemonListTitle},
    pokemonList: {path: "/pokemon", title: pokemonListTitle},
    pokemon: {path: "/pokemon/:id", title: "Pokemon Details"},
    pokemonCaughtList: {path: "/pokemon-caught", title: "List of Caught Pokemon"},
    pokemonCaught: {path: "/pokemon-caught/:id", title: "Caught Pokemon Details"},
    types: {path: "/types", title: "Types of pokemon"},
};

export const pokemonApi = 'https://pokeapi.co/api/v2';
