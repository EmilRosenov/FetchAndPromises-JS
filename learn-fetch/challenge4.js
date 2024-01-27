const pokePromise4 = fetch();
pokePromise4
  .then((response) => response.json())
  .then((pikachu) => console.log(pikachu))
  .catch((error) => console.log(error));
