import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  function createAnimal(animal) {
    const divHolder = document.createElement('div');
    divHolder.classList.add('numero-animal');

    divHolder.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return divHolder;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach(animal => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (err) {
      console.log(err);
    }
  }

  return criarAnimais();
}
