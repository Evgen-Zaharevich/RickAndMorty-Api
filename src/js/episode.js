import { fetchEpisode } from './fetchEpisode';

const formRef = document.querySelector(`.form`);
const episodeNameContainerRef = document.querySelector(
  `.location-name-container`
);
const residentCard = document.querySelector(`.resident-card`);

formRef.addEventListener(`submit`, onChooseEpisode);
formRef.addEventListener(`submit`, onDeleteCards);

function onChooseEpisode(event) {
  event.preventDefault();

  const numberEpisode = event.target.elements.input.value;

  fetchEpisode(numberEpisode)
    .then(episode => {
      onReturnResidentsFromEpisode(episode);
      onCreateMarkupH1(episode);
    })
    .catch(error => error);
}

function onReturnResidentsFromEpisode({ name, characters }) {
  let character = characters.map(character => {
    return fetch(`${character}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        onCreateMarkupForResidentsCard(data);
      })
      .catch(error => error);
  });
}

function onCreateMarkupH1({ name }) {
  onDeleteMarkupH1();

  const markup = `<h3 class="location-name"><b>Name Location: </b>${name}</h3>
  <h4 style="text-align: center;"><b>Characters in this episode</b></h4>`;
  episodeNameContainerRef.insertAdjacentHTML('afterbegin', markup);
}

function onCreateMarkupForResidentsCard({ image, gender, name, location }) {
  const markup = `<div class="resident-card__container"><img src="${image}" alt="${name}" class="resident-card__img" width="250" hight="250" />
      <h3 class="resident-card__name"><b></b>${name}</h3>
      <p class="resident-card__gender"><b>Gender: </b>${gender}</p>
      <p class="resident-card__location"><b>Location: </b>${Object.values(
        location.name
      ).join(``)}</p></div>`;
  residentCard.insertAdjacentHTML('afterbegin', markup);
}

function onDeleteMarkupH1() {
  episodeNameContainerRef.innerHTML = '';
}

function onDeleteCards() {
  residentCard.innerHTML = '';
}
