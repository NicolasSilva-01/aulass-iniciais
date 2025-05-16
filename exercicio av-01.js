/*Crie um programa que receba um array com as idades de 5 pessoas: [17, 21, 16, 25, 19]
*/

const idades = [17, 21, 16, 25, 19]
let contadorMaiorIdades = 0
let contadorMenorIdades = 0



for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        contadorMaiorIdades++;
    }  
}
console.log(`são ${contadorMaiorIdades} pessoas maiores de idade`);

for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        contadorMenorIdades++;
    }  
}
console.log(`são ${contadorMenorIdades} pessoas menores de idade`);
