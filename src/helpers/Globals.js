export const routes = {
    pokemonList: {
        path: "/pokemon/:isCaught(caught)?",
        title: (isCaught) => `List of ${isCaught === "caught" ? "caught " : ""}Pokemon`,
    },
    pokemon: {
        path: "/pokemon/:id(\\d+)/:isCaught(caught)?",
        title: (isCaught) => `Details of ${isCaught === "caught" ? "caught " : ""}Pokemon`,
    },
    types: {
        path: "/types",
        title: () => "Types of Pokemon",
    },
};

export const pokemonApi = 'https://pokeapi.co/api/v2';
