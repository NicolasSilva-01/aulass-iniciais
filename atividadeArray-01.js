/*
Você está desenvolvendo um sistema para uma escola que precisa calcular a média
das notas de uma turma. Crie um array com 5 notas e calcule a média.
*/

let notas = [8.5,5.0,7.4,10.0,2.5]
let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
    console.log(`valor da soma: ${soma}`);
    
}
 let media = soma % notas.length
 console.log(`a media é: ${media.toFixed(1)}`);
 