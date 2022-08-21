const inputs = { first: null, second: null };

//Print out the result on the window
function printOutput(content) {
  const print = document.querySelector('#result');
  print.classList.add('result-style');
  document.querySelector('#result').textContent = content;
}

//All calculations
function sum() {
  let sum = inputs.first + inputs.second;
  return sum.toFixed(2);
}

function sub() {
  let sub = inputs.first - inputs.second;
  return sub.toFixed(2);
}

function div() {
  let div = inputs.first / inputs.second;
  return div.toFixed(2);
}

function mul() {
  let mul = inputs.first * inputs.second;
  return mul.toFixed(2);
}

function mod() {
  let mod = inputs.first % inputs.second;
  return mod.toFixed(2);
}

function clear() {
  return null;
}
//Catch the input numbers and turn them into Numbers
document.querySelector('#calc-data').addEventListener('input', (e) => {
  if (e.target.name) {
    inputs[e.target.name] = Number(e.target.value);
  }
});

//Catch witch button was pressed and to print the result on the window

document.querySelector('#sum').addEventListener('click', (e) => {
  const result = sum();
  printOutput(result);
});

document.querySelector('#sub').addEventListener('click', (e) => {
  const result = sub();
  printOutput(result);
});

document.querySelector('#div').addEventListener('click', (e) => {
  const result = div();
  printOutput(result);
});

document.querySelector('#mul').addEventListener('click', (e) => {
  const result = mul();
  printOutput(result);
});

document.querySelector('#mod').addEventListener('click', (e) => {
  const result = mod();
  printOutput(result);
});

document.querySelector('#clear').addEventListener('click', (e) => {
  const result = clear();
  printOutput(result);
});
