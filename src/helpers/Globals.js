export const routes = {
    pokemonList: {path: "/pokemon/", title: "Pokemon list"},
    pokemonCaughtList: {path: "/pokemon/:isCaught(caught)", title: "List of Caught Pokemon"},
    pokemon: {path: "/pokemon/:id(\\d+)/:isCaught(caught)?", title: "Pokemon Details"},
    types: {path: "/types", title: "Types of pokemon"},
};

export const pokemonApi = 'https://pokeapi.co/api/v2';
