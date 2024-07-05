const urlPlanets = 'https://dragonball-api.com/api/planets';
const urlCharacters = 'https://dragonball-api.com/api/characters';
const $CharactersDbz = document.getElementById('dbz');
fetch(urlCharacters)
    .then((response) => response.json())
    .then((response) => {
    response.items.forEach((character) => {
        const $Figure = document.createElement('figure');
        const $Img = document.createElement('img');
        const $Figcaption = document.createElement('figcaption');
        const $Affiliation = document.createElement('h3');
        $Affiliation.innerText = character.affiliation;
        const $Gender = document.createElement('h3');
        $Gender.innerText = character.gender;
        const $Ki = document.createElement('h3');
        $Ki.innerText = `Nivel de Poder Estado Normal (Ki): ${character.ki}`;
        const $MaxKi = document.createElement('h3');
        $MaxKi.innerText = `Nivel de Poder Maximo (Ki): ${character.maxKi}`;
        const $Name = document.createElement('h2');
        $Name.innerText = character.name;
        const $Race = document.createElement('h3');
        $Race.innerText = character.race;
        $Img.setAttribute('src', character.image);
        $Img.setAttribute('alt', character.name);
        $Img.setAttribute('title', character.name);
        $Figcaption.appendChild($Name);
        $Figcaption.appendChild($Affiliation);
        $Figcaption.appendChild($Gender);
        $Figcaption.appendChild($Race);
        $Figcaption.appendChild($Ki);
        $Figcaption.appendChild($MaxKi);
        $Figure.appendChild($Img);
        $Figure.appendChild($Figcaption);
        $CharactersDbz.appendChild($Figure);
    });
});
export {};
