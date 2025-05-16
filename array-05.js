/*exemplo prático - soma dos elementos:
let numeros = [10, 20, 30, 40, 50];
let soma = 0;
*/

let numeros = [10, 20, 30, 40, 50]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
    console.log(`valor da soma parcial ${soma}`);
    
}
console.log(`-----------------------------------`);
console.log(`valor final da soma: ${soma}`);
