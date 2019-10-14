export default function fetchBtc(url, target) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / json.BRL.sell).toFixed(6);
      // console.log(json.BRL.sell);
    })
    .catch(err => {
      console.log(Error(err));
    });
}
