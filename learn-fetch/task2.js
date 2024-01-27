function getRepos(user) {
  return fetch(user.repos_url).then((response) => response.json());
}

getUser("oliverjam").then(getRepos).then(console.log).catch(console.error);
