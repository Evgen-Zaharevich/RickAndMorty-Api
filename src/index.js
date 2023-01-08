import { fetchCharacters } from './js/fetchCharacters';

const formRef = document.querySelector(`.form`);

formRef.addEventListener(`submit`, onSearchCharacter);

function onSearchCharacter(event) {
  event.preventDefault();

  const numberCharacter = event.target.elements.input.value;

  fetchCharacters(numberCharacter).then(character => console.log(character));
}
