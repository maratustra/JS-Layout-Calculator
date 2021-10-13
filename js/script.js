const title = document.getElementsByTagName('h1')[0];

const buttons = document.getElementsByClassName('handler_btn');

const plusButton = document.querySelector('.screen-btn');

const percentItems = document.querySelectorAll('.other-items.percent');

const numberItems = document.querySelectorAll('.other-items.number');

const inputs = document.querySelector('.rollback [type="range"]');

const spans = document.querySelector('.rollback span.range-value');

const totalInputs = document.getElementsByClassName('total-input');

for (let i = 0; i < totalInputs.length; i++) {
  console.log(totalInputs[i]);
}

let screenBlocks = document.querySelectorAll('div.screen');
