export const routes = {
    pokemonList: {path: "/pokemon/", title: "Pokemon list"},
    pokemon: {path: "/pokemon/:id(\\d+)", title: "Pokemon Details"},
    pokemonCaughtList: {path: "/pokemon/:isCaught(caught)", title: "List of Caught Pokemon"},
    pokemonCaught: {path: "/pokemon/:id(\\d+)/:isCaught(caught)", title: "Caught Pokemon Details"},
    types: {path: "/types", title: "Types of pokemon"},
};

export const pokemonApi = 'https://pokeapi.co/api/v2';
