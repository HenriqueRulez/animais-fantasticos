export default function initFetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(json => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / json.BRL.sell).toFixed(6);
      // console.log(json.BRL.sell);
    })
    .catch(err => {
      console.log(Error(err));
    });
}
