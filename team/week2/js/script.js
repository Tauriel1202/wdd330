const input = document.querySelector('#input');
const input2 = document.querySelector('#input2');
const btnPlus = document.querySelector('#addBtn');
const btnMinus = document.querySelector('#subBtn');
const btnTimes = document.querySelector('#timesBtn');
const btnDivide = document.querySelector('#divBtn');
const div = document.querySelector('div');

function add(input, input2, div) {
  let total = parseFloat(input.value) + parseFloat(input2.value);
  div.append(total);
}

function minus(input, input2, div) {
  let total = parseFloat(input.value) - parseFloat(input2.value);
  div.append(total);
}

function times(input, input2, div) {
  let total = parseFloat(input.value) * parseFloat(input2.value);
  div.append(total);
}

function divide(input, input2, div) {
  let total = parseFloat(input.value) / parseFloat(input2.value);
  div.append(total);
}

btnPlus.addEventListener('click', () => {add(input, input2, div)});
btnMinus.addEventListener('click', () => {minus(input, input2, div)})
btnTimes.addEventListener('click', () => {times(input, input2, div)})
btnDivide.addEventListener('click', () => {divide(input, input2, div)})