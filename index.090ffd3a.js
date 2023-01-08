document.querySelector(".form").addEventListener("submit",(function(t){var e;t.preventDefault(),(e=t.target.elements.input.value,fetch("https://rickandmortyapi.com/api/character/".concat(e)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){return console.log(t)}))}));
//# sourceMappingURL=index.090ffd3a.js.map
