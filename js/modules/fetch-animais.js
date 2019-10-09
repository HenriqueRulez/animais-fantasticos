import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const divHolder = document.createElement('div');
    divHolder.classList.add('numero-animal');

    divHolder.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return divHolder;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJson.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (err) {
      console.log(err);
    }
  }

  fetchAnimais('./animaisapi.json');
}
