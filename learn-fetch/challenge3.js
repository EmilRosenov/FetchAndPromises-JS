const pokePromise3 = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
pokePromise3
  .then((response) => response.json())
  .then((pikachu) => console.log(pikachu));
