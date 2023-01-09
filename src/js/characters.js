import { fetchCharacters } from '../js/fetchCharacters';

const formRef = document.querySelector(`.form`);
const CardRef = document.querySelector(`.card-container`);
const buttonBackRef = document.querySelector(`.button__bottom__back`);
const buttonNextRef = document.querySelector(`.button__bottom__next`);

formRef.addEventListener(`submit`, onSearchCharacter);
// buttonNextRef.addEventListener(`submit`, onPressNextButtonChangeValue);

function onSearchCharacter(event) {
  event.preventDefault();

  const numberCharacter = event.target.elements.input.value;

  fetchCharacters(numberCharacter).then(character =>
    onCreateMarkupForCard(character)
  );
}

function onCreateMarkupForCard({ image, name, gender, location }) {
  onDeleteCard();

  const markup = `<div class="character-card__container"><img src="${image}" alt="${name}" class="character-card__img" width="246" hight="250" />
      <h1 class="character-card__name"><b></b>${name}</h1>
      <p class="character-card__gender"><b>Gender: </b>${gender}</p>
      <p class="character-card__location"><b>Location: </b>${Object.values(
        location.name
      )}</p></div> <div class="button-container">
      <button class="button__bottom__back" type="submit">Back</button>
      <button class="button__bottom__next" type="submit">Next</button>
    </div>`;
  CardRef.insertAdjacentHTML(`afterbegin`, markup);
}

function onDeleteCard() {
  CardRef.innerHTML = ``;
}

// function onPressNextButtonChangeValue(number) {
//   return (number += 1);
// }
