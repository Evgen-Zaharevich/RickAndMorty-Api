import { fetchLocation } from './fetchLocation';

const formRef = document.querySelector(`.form`);
const cardContainer = document.querySelector(`.resident-card`);
const locationNameContainer = document.querySelector(
  `.location-name-container`
);

formRef.addEventListener(`submit`, onChooseLocation);
formRef.addEventListener(`submit`, onDeleteCards);

function onChooseLocation(event) {
  event.preventDefault();

  const numberLocation = event.target.elements.input.value;

  fetchLocation(numberLocation)
    .then(location => {
      onReturnResidentsFromLocation(location);
      onCreateMarkupH1(location);
    })
    .catch(error => error);
}

function onReturnResidentsFromLocation({ name, residents }) {
  let resident = residents.map(resident => {
    return fetch(`${resident}`)
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
  <h4 style="text-align: center;"><b>Characters  located in this location</b></h4>`;
  locationNameContainer.insertAdjacentHTML('afterbegin', markup);
}

function onCreateMarkupForResidentsCard({ image, gender, name, location }) {
  const markup = `<div class="resident-card__container"><img src="${image}" alt="${name}" class="resident-card__img" width="250" hight="250" />
      <h3 class="resident-card__name"><b></b>${name}</h3>
      <p class="resident-card__gender"><b>Gender: </b>${gender}</p>
      <p class="resident-card__location"><b>Location: </b>${Object.values(
        location.name
      ).join(``)}</p></div>`;
  cardContainer.insertAdjacentHTML('afterbegin', markup);
}

function onDeleteMarkupH1() {
  locationNameContainer.innerHTML = '';
}

function onDeleteCards() {
  cardContainer.innerHTML = '';
}
