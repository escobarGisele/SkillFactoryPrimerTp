const URL_PERSONAJES = "https://rickandmortyapi.com/api/character/";

const users = axios.get(URL_PERSONAJES);
const responseAPIAxios = users.then((response) => {
  const results = response.data.results;
  let body = ``;
  results.map((character) => {
    const { name, image } = character;
    body += `
    <div class="containerCard">
        <div class="card">
            <img  class="card-image" src="${image}" >
            <p class="card-name">${name}</p>
        </div>
        </div>

        `;
    document.getElementById("personajes").innerHTML = body;
  });
});
