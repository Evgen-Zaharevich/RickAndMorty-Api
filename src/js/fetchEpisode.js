export function fetchEpisode(number) {
  return fetch(`https://rickandmortyapi.com/api/episode/${number}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
