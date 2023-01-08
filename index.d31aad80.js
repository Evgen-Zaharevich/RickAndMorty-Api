document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();(e=t.target.elements.input.value,fetch(`https://rickandmortyapi.com/api/character/${e}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((t=>console.log(t)));var e}));
//# sourceMappingURL=index.d31aad80.js.map
