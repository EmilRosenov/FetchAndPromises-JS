function getUser(username) {
  const user1 = `https://api.github.com/users/${username}`;
  return fetch(user1).then((response) => response.json());
}

getUser("oliverjam")
  .then((user) => console.log(user))
  .catch((error) => console.log(error));
