var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

destructivelyAppendKitten('Ralph');

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

destructivelyRemoveLastKitten()


function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

destructivelyPrependKitten('Ralph');

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

destructivelyRemoveFirstKitten();

function appendKitten(name){
  const kittens2 = [...kittens, name];
  return kittens2;
}

appendKitten('Broom');

function removeLastKitten() {
  const kittens3 = kittens.slice(0, kittens - 1);
}