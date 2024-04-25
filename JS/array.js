var ganhouCopa = [1959, 1962, 1970, 1994, 2002];

for (let i = 0; i < ganhouCopa.length; i++){
  console.log(`O Brasil ganhou a copa de ${ganhouCopa[i]}`);
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if (frutas[i] === 'Pera'){
    break;
  }
}
var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta);

console.log(frutas);