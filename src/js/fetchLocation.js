export function fetchLocation(number) {
  return fetch(`https://rickandmortyapi.com/api/location/${number}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
