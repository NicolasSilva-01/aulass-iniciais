/*Dado o array de números: [12, 5, 8, 21, 16, 7, 30, 45, 13, 27]*/

const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27]
let numerosPares = 0
let numerosImpares = 0
let numerosMaiores = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0 ) {
        numerosPares++;
    }  
}
console.log(`são ${numerosPares} numeros pares`);

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 1 ) {
        numerosImpares++;
    }  
}
console.log(`são ${numerosImpares} numeros impares`);

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 20) {      
       numerosMaiores ++;
    }  
}

console.log(`são ${numerosMaiores} numeros maiores que 20`);
