export function fetchCharacters(number) {
  return fetch(`https://rickandmortyapi.com/api/character/${number}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
