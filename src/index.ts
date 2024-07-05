import { listCharactersDbz } from './interface/interface';

const urlPlanets: string = 'https://dragonball-api.com/api/planets';
const urlCharacters: string = 'https://dragonball-api.com/api/characters';
const $CharactersDbz = document.getElementById('dbz') as HTMLElement;

fetch(urlCharacters)
  .then((response) => response.json())
  .then((response: listCharactersDbz) => {
    response.items.forEach((character) => {
      const $Figure = document.createElement('figure') as HTMLElement;
      const $Img = document.createElement('img') as HTMLImageElement;
      const $Figcaption = document.createElement('figcaption') as HTMLElement;
      const $Affiliation = document.createElement('h3') as HTMLElement;
      $Affiliation.innerText = character.affiliation;
      const $Gender = document.createElement('h3') as HTMLElement;
      $Gender.innerText = character.gender;
      const $Ki = document.createElement('h3') as HTMLElement;
      $Ki.innerText = `Nivel de Poder Estado Normal (Ki): ${character.ki}`;
      const $MaxKi = document.createElement('h3') as HTMLElement;
      $MaxKi.innerText = `Nivel de Poder Maximo (Ki): ${character.maxKi}`;
      const $Name = document.createElement('h2') as HTMLElement;
      $Name.innerText = character.name;
      const $Race = document.createElement('h3') as HTMLElement;
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
