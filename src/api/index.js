const imagensApiUrl = "https://dog.ceo/api";
const sobreApiUrl = "https://api.thedogapi.com/v1/";

export const buscaImagemPorRaca = (raca) =>
  fetch(`${imagensApiUrl}/breed/${raca.toLowerCase()}/images/random`)
    .then((res) => res.json())
    .then((res) => res.message);

export const buscaSobreRacas = () =>
  fetch(`${sobreApiUrl}/breeds`).then((res) => res.json());

export const buscaTodasRacas = () =>
  fetch(`${imagensApiUrl}/breeds/list/all`)
    .then((res) => res.json())
    .then((res) => Object.keys(res.message));
